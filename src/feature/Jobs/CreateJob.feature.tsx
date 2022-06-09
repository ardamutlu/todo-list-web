import React from "react";
import { Card } from "react-bootstrap";
import Title from "@components/Title";
import JobForm from "@feature/Jobs/Form";

const CreateJob: React.FC = () => {
  return (
    <Card>
      <Card.Header>
        <Title className="mb-0">Create New Job</Title>
      </Card.Header>
      <Card.Body>
        <JobForm />
      </Card.Body>
    </Card>
  );
};

export default CreateJob;
