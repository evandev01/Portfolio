import React, { useState } from 'react';
import API from '../../utils/API';
import NavTabs from '../NavTabs';
import HeaderContact from '../HeaderContact';
import { Form, Container, Col, Button } from 'react-bootstrap';
import 'animate.css';
import './style.css';

require('dotenv').config();

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    senderEmail: '',
    occupation: '',
    subject: '',
    text: ''
  });

  const { firstName, lastName, senderEmail, occupation, subject, text } =
    formData;

  // onChange Event Handler
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Reset form function
  const resetForm = () =>
    setFormData({
      firstName: '',
      lastName: '',
      senderEmail: '',
      occupation: '',
      subject: '',
      text: ''
    });

  // Submit event handler
  const handleSubmit = async e => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      senderEmail,
      occupation,
      subject,
      text
    };

    await API.sendEmail(data)
      .then(response => {
        console.log(response);
        console.log(data);
        resetForm();
        if (response.data.status === 'success') {
          alert(
            'Email Sent!\nPlease allow 24hrs for a response.\nThank you for visting evanDev.com and have a great day!'
          );
          resetForm();
        } else if (response.data.status === 'fail') {
          alert('Message failed');
          resetForm();
        }
      })
      .then(() => {
        console.log(data);
        resetForm();
      })
      .catch(err => console.log(err));
  };

  return (
    <div id='contact-body'>
      <HeaderContact />
      <NavTabs />
      <Container>
        <Form onSubmit={e => handleSubmit(e)}>
          <Form.Row>
            <Col>
              <Form.Control
                name='firstName'
                className='animate__animated animate__backInDown '
                placeholder='First name'
                type='text'
                onChange={e => onChange(e)}
                value={firstName}
              />
            </Col>
            <Col>
              <Form.Control
                name='lastName'
                className='animate__animated animate__backInDown '
                placeholder='Last name'
                type='text'
                onChange={e => onChange(e)}
                value={lastName}
              />
            </Col>
          </Form.Row>

          <Form.Group controlId='exampleForm.ControlInput1'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              name='senderEmail'
              className='animate__animated animate__backInDown '
              placeholder='name@gmail.com'
              type='email'
              onChange={e => onChange(e)}
              value={email}
            />
          </Form.Group>

          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>Please select: </Form.Label>
            <Form.Control
              name='occupation'
              className='animate__animated animate__backInDown '
              as='select'
              onChange={e => onChange(e)}
              value={occupation}
            >
              <option>I am: </option>
              <option>an employer</option>
              <option>an industry professional</option>
              <option>an instructor</option>
              <option> a student</option>
              <option> other</option>
            </Form.Control>
            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Subject: </Form.Label>
            <Form.Control
              name='subject'
              className='animate__animated animate__backInDown '
              placeholder='Subject'
              type='text'
              onChange={e => onChange(e)}
              value={subject}
            />

            <Form.Label>Message: </Form.Label>
            <Form.Control
              name='text'
              className='animate__animated animate__backInDown '
              as='textarea'
              rows={5}
              onChange={e => onChange(e)}
              value={text}
            />
          </Form.Group>

          <Button
            className='animate__animated animate__heartBeat'
            variant='primary'
            type='submit'
            // onClick={() => resetForm()}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
