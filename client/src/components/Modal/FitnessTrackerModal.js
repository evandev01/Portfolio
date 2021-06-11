import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const FitnessTrackerModal = props => {
  return (
    <Modal
      {...props}
      size='md'
      ariaLabelledBy='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Fitness Tracker</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Description: </h6>
        <p>
          School project web application designed to allow user to allow user to
          set and track fitness goals.
        </p>
        <h6>Responsibilities: </h6>
        <p>Front-End</p>
        <ul>
          <li>UI/UX design</li>
          <li>JavaScript</li>
        </ul>
        <h6>Technologies:</h6>
        <p>JavaScript, HTML5, CSS3, Bootstrap, Pixelmator graphics software</p>
        <a id='github' href='https://github.com/evandev01/fitness-tracker'>
          GitHub Repo
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FitnessTrackerModal;
