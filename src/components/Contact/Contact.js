import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  function sendEmail(event) {
    event.preventDefault();
    alert("Email sent!")
  }
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const validateEmail = (e) => {
  if(e.target?.value && e.target.value.match(isValidEmail)){
    return false;
  }else{
    return true;
  }
}

  return (
    <div className="contact-section">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={validateEmail}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control name="subject" type="text" placeholder="Enter message" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control name="message" type="text" placeholder="Enter message" />
        </Form.Group>

        <Button onClick={sendEmail} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    );

}

export default Contact;