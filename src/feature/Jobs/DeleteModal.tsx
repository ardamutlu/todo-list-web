import React from "react";
import { Button, Modal, ModalProps } from "react-bootstrap";

const DeleteModal = ({ onClick, ...props }: ModalProps) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="text-center">
        <h4 className="p-4">Are you sure you want to delete it?</h4>
        <div className="d-flex px-4 pb-4">
          <Button
            className="w-100 me-3"
            variant="secondary"
            onClick={props.onHide}
          >
            Cancel
          </Button>
          <Button className="w-100" variant="danger" onClick={onClick}>
            Approve
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;
