import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './QuoteForm.css';

const QuoteForm = () => {
  return (
    <div className='quote-container'>
      <h2>Get Your Free Quote Today!</h2>

      <Form action='https://api.web3forms.com/submit' method="POST" id="form" className='form-layout'>
        <input type="hidden" name="apikey" value="099dd778-2dab-49cf-b4cc-9784c27b5566"/>
        <input type="hidden" name="subject" value="New quote request!"/>

        <div className="form-group-container">
          <div className="form-group-left">
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder="Name" name="name" required/>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Email" name="email" required/>
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Control type="tel" placeholder="Phone" name="phone" required/>
            </Form.Group>

            <Form.Group controlId="formServiceRequired">
              <Form.Control as="select" name="service" required>
                <option>Select Option</option>
                <option>Alloy Wheel Refurbishment</option>
                <option>Brake Caliper Resprays</option>
                <option>Colour Changes</option>
                <option>Custom Colours</option>
                <option>Diamond Cutting</option>
              </Form.Control>
            </Form.Group>
          </div>

          <div className="form-group-right">
            <Form.Group controlId="formMake/ModelOfCar">
              <Form.Control type="text" placeholder="Make/Model of Car" name="car" required/>
            </Form.Group>

            <Form.Group controlId="formNumberOfWheels">
              <Form.Control type="number" placeholder="Number of Wheels" name="wheels" required/>
            </Form.Group>

            <Form.Group controlId="formColour">
              <Form.Control type="text" placeholder="Colour Requirements" name="colour" required/>
            </Form.Group>

            <Form.Group controlId="formChooseAFile">
              <Form.Control type="file" name="file" required/>
            </Form.Group>
          </div>
        </div>

        <Button  className='quote-button' variant="primary" type="submit">
          Submit Enquiry
        </Button>
      </Form>
    </div>
  );
}

export default QuoteForm;
