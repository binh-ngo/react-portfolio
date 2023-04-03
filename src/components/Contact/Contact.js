import React, { useRef } from "react";
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4i4xmp7",
        "template_mrmovgj",
        form.current,
        "1UA4xHgoYEgO0KucC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  

  return (
    <div className="contact-section">
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="user_name" placeholder="Enter name" required/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="user_email" placeholder="Enter email" required/> 
          {/* onChange={validateEmail} */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control name="message" type="text" placeholder="Enter message" required/>
        </Form.Group>

        <input type="submit" value="Send" />
      </Form>
    </div>
    );

}

export default Contact;