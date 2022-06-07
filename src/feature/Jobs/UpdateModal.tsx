import React from "react";
import { Button, Modal, ModalProps } from "react-bootstrap";
import JobForm from "@feature/Jobs/Form";

const UpdateModal = ({ onClick, data, ...props }: ModalProps) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="text-center">
        <h4 className="p-4">Job Edit</h4>
        <div className="mb-3">
          <JobForm data={data} action="update" />
        </div>
        <div className="d-flex px-4 pb-4">
          <Button
            className="w-100 me-3"
            variant="secondary"
            onClick={props.onHide}
          >
            Cancel
          </Button>
          <Button className="w-100" variant="danger" onClick={onClick}>
            Update
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateModal;
