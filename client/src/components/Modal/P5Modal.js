import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const P5Modal = props => {
  return (
    <Modal
      {...props}
      size='md'
      ariaLabelledBy='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>GreatNews.life p5 Sketch</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Description: </h6>
        <p>Interactive p5.js sketch created for GreatNews.life</p>
        <h6>Interactive Requirements:</h6>
        <ul>
          <li>Mouse events</li>
          <li>Scroll events</li>
          <li>Key events</li>
          <li>Time</li>
          <li>Randomness</li>
          <li>Limit completion to a couple of hours</li>
        </ul>
        <h6>Technologies:</h6>
        <p>p5.js, JavaScript, CSS3, Pixelmator graphics software</p>
        <a
          id='github'
          href='https://editor.p5js.org/evandev01/sketches/ZVfVwelyc'
        >
          Web Editor
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default P5Modal;
