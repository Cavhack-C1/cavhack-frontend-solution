import React from 'react'
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

export const AddModal = props => (
  <Modal show={props.showModal} onHide={props.handleModalClose}>
    <Modal.Header closeButton>
      <Modal.Title>Add {props.type}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <FormGroup
        controlId="formBasicText"
      >
        <ControlLabel>{props.type}</ControlLabel>
        <FormControl
          type="text"
          value={props.value}
          placeholder="Enter text"
          onChange={props.handleChange}
          autoFocus
        />
      </FormGroup>
    </Modal.Body>
    <Modal.Footer>
      <Button bsStyle="link" onClick={props.handleModalClose}>Cancel</Button>
      <Button bsStyle="success" onClick={props.submit}>Add</Button>
    </Modal.Footer>
  </Modal>
)