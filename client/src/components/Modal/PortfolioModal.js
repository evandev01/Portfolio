import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PortfolioModal = props => {
  return (
    <Modal
      {...props}
      size='md'
      ariaLabelledBy='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>evanDev Portfolio</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Description:</h6>
        <p>
          React portfolio highlighting experience and school projects with bio
          and contact form that sends messages to my email inbox upon
          submission.
        </p>
        <h6>Features: </h6>
        <ul>
          <li>Provides access to my applications</li>
          <li>Provides access to my GitHub repositories</li>
          <li>Provides information about myself</li>
          <li>Allows user to contact me</li>
        </ul>
        <h6>Technologies:</h6>
        <p>
          React.js, JavaScript, Node.js, Express, Nodemailer, SendGrid,
          React-bootstrap, HTML5, CSS3, Pixelmator graphics software
        </p>
        <a id='github' href='https://github.com/evandev01/Portfolio'>
          GitHub Repo
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PortfolioModal;
