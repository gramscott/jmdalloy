import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './QuoteForm.css';

const QuoteForm = ({ onSubmit }) => {
  return (
    <div className='quote-container pt-5'>
      <h2>Get Your Free Quote Today!</h2>
      
      <Form  action='https://api.web3forms.com/submit' method="POST" enctype="multipart/form-data" className='form-layout' onSubmit={onSubmit}>
        <input type="hidden" name="apikey" value="099dd778-2dab-49cf-b4cc-9784c27b5566"/>
        <input type="hidden" name="redirect" value="http://localhost:3000/thank-you"/>
        <input type="hidden" name="subject" value="New Quote Submission"/>


        <div className="form-group-container row">
          <div className="col-lg-6">
            <Form.Group controlId="formName" className='form-item'>
              <Form.Control type="text" placeholder="Name" name="name" required/>
            </Form.Group>
           

            <Form.Group controlId="formPhone" className='form-item'>
              <Form.Control type="tel" placeholder="Contact Number" name="phone" required/>
            </Form.Group>

            <Form.Group controlId="formServiceRequired" className='form-item'>
              <Form.Control as="select" name="service" required>
                <option>Service Required</option>
                <option>Alloy Wheel Refurbishment</option>
                <option>Brake Caliper Resprays</option>
                <option>Colour Changes</option>
                <option>Custom Colours</option>
                <option>Diamond Cutting</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formColour" className='form-item'>
              <Form.Control type="text" placeholder="Colour Requirements" name="colour" required/>
            </Form.Group>

          </div>

          <div className="col-lg-6">
          <Form.Group controlId="formEmail" className='form-item'>
              <Form.Control type="email" placeholder="Email Address" name="email" required/>
            </Form.Group>
            <Form.Group controlId="formMake/ModelOfCar" className='form-item'>
              <Form.Control type="text" placeholder="Make/Model of Car" name="car" required/>
            </Form.Group>

            <Form.Group controlId="formNumberOfWheels" className='form-item'>
              <Form.Control type="number" placeholder="No. of Wheels" name="wheels" required/>
            </Form.Group>

            <Form.Group controlId="formMessage" className='form-item'>
              <Form.Control as="textarea" rows={3} placeholder="Additional Notes?" name="message"/>
            </Form.Group>

          </div>
        </div>

        <p className='upload-instructions'>
        <b>Upload images of your wheels (Maximum 8 images). Max image size 4mb. Allowed file types: .jpeg/.gif/.png/.pdf </b>
        </p>
        <Form.Group controlId="formChooseAFile" className='form-item file col-lg-6'>
        <input type="file" id="attachment" name="attachment" accept="image/jpeg,image/png" className='file' required />
            </Form.Group>

        <Button  className='quote-button' variant="primary" type="submit">
          Submit Enquiry
        </Button>
      </Form>
    </div>
  );
}

export default QuoteForm;
