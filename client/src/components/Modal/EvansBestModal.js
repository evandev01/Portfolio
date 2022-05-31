import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const EvansBestModal = props => {
  return (
    <Modal
      {...props}
      size='md'
      ariaLabelledBy='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Evan's Best</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Description: </h6>
        <p>Amazon affiliate application.</p>
        <h6>Details: </h6>
        <p>View all of my best picks for products found on Amazon.</p>
        <p>
          Click view details or view on Amazon to see more details about the
          product or purchase through Amazon.
        </p>
        <h6>Technologies:</h6>
        <p>
          Node.js, React.js, JavaScript, React-Bootstrap, Express, Sendgrid API,
          HTML, CSS, Pixelmator graphics software
        </p>
        <a id='github' href='https://github.com/evandev01/affiliate_app'>
          GitHub
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EvansBestModal
