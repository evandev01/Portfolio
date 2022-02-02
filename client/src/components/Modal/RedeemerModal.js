import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const RedeemerModal = props => {
  return (
    <Modal
      {...props}
      size='md'
      ariaLabelledBy='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Redeemer Church</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Requirements:</h6>
        <ul>
          <li>Stream live services</li>
          <li>Allow user to give tithes and offerings online</li>
          <li>Provide information about the church, events and staff</li>
        </ul>
        <h6>Technologies:</h6>
        <p>
          Node.js, React.js, JavaScript, React-Bootstrap, HTML5, CSS3,
          Pixelmator graphics software
        </p>
        <a id='github' href='https://github.com/evandev01/Redeemer'>
          GitHub
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RedeemerModal
