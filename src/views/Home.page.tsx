import React from "react";
import { Col, Row } from "react-bootstrap";
import CreateJob from "../feature/Jobs/CreateJob.feature";
import ListJobs from "../feature/Jobs/ListJobs.feature";

const HomePage: React.FC = () => {
  return (
    <Row>
      <Col xs={12} className="mb-3">
        <CreateJob />
      </Col>
      <Col xs={12}>
        <ListJobs />
      </Col>
    </Row>
  );
};

export default HomePage;
