import React, { useRef } from "react";
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [clicked, setClicked] = React.useState(false);

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
        <Form.Group className="mb-3 info" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="user_name" placeholder="Enter name" required/>
        </Form.Group>
  
        <Form.Group className="mb-3 info" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="user_email" placeholder="Enter email" required/> 
        </Form.Group>

        <Form.Group className="mb-3 info" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control contentEditable="true" name="message" type="text" placeholder="Enter message" required/>
        </Form.Group>

        <input className="contactBtn" type="submit" value="Send" />
      </Form>
      {clicked && <p className="mt-4 text-center">Thank you for your message! I will get back to you soon!</p>}
    </div>
    );

}

export default Contact;