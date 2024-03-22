const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3001;


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname.split(' ').pop())
    }
    });

    const upload = multer({ storage: storage });

    app.post('/upload', upload.single('file'), (req, res) => {
        if (req.file) {
            res.json({message : 'File uploaded successfully', filename : req.file.filename});
        } else {
            res.status(400).json({ message : 'No file uploaded' });
        }
    });

    app.use('/uploads', express.static('uploads'));

    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    });