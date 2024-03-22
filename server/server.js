const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3001;

const cors = require('cors');
app.use(cors());

// Storage configuration
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname.split(' ').pop())
    }
});

const upload = multer({ storage: storage });

// Email transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'graemesco96@gmail.com',
        pass: 'password', // Be cautious with storing plaintext passwords, consider using environment variables or other secure methods
    }
});

// File upload route
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    // Define mail options inside the route handler
    const mailOptions = {
        from: 'graemesco96@gmail.com',
        to: 'recipient_email@example.com',
        subject: 'File Upload',
        text: 'A file has been uploaded.',
        attachments: [
            {
                path: req.file.path // Use req.file.path to get the file path
            }
        ]
    };

    // Send email inside the route handler
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Error sending email.' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'File uploaded and email sent successfully.', filename: req.file.filename });
        }
    });
});

// Server start
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
