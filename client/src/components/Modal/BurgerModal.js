import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const BurgerModal = props => {
  return (
    <Modal
      {...props}
      size='md'
      ariaLabelledBy='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Eat Da Burger</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Description: </h6>
        <p>
          School web application that allows the user to create a burger, devour
          it, eat it again or delete it.
        </p>
        <h6>Responsibilities: </h6>
        <p>Full-Stack</p>
        <h6>Technologies:</h6>
        <p>
          JavaScript, Node.js, Handlebars, Express, MVC, MySQL, HTML5, CSS3,
          Pixelmator graphics software
        </p>
        <a
          id='github'
          href='https://github.com/evandev01/burger_express_handlebars'
        >
          GitHub Repo
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BurgerModal;
