import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const EDateBookModal = props => {
  return (
    <Modal
      {...props}
      size='md'
      ariaLabelledBy='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>eDatebook</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Description: </h6>
        <p>
          School project application designed to allow user to allow user to
          create, save, store and delete calendar events and addresses.
        </p>
        <h6>Responsibilities: </h6>
        <p>Full-Stack</p>
        <h6>Technologies:</h6>
        <p>
          React.js, JavaScript, Node.js, React-bootstrap, HTML5, CSS3,
          Pixelmator graphics software
        </p>
        <p>*Project is currently under construction.</p>
        <a id='github' href='https://github.com/evandev01/edatebook'>
          GitHub Repo
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EDateBookModal;
