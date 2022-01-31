import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const RusticModal = props => {
  return (
    <Modal
      {...props}
      size='md'
      ariaLabelledBy='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Rustic Living</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Description: </h6>
        <p>
          Full stack web application designed for Rustic Living custom
          furniture.
        </p>
        <h6>Details: </h6>
        <p>
          Users may create an account, purchase products, view galleries,
          contact and read about the company
        </p>
        <p>Owner may view, create, edit and delete products and users</p>
        <h6>Technologies:</h6>
        <p>
          Node.js, React.js, Redux, Express, PayPal API, Sendgrid API, CSS,
          Pixelmator graphics software
        </p>
        <a id='github' href='https://github.com/evandev01/rusticliving'>
          GitHub Repo
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RusticModal
