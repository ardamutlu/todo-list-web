import React from "react";
import styled from "styled-components";
import { Button, Col, Row } from "react-bootstrap";
import Code from "../Code";

const StyledFooter = styled.footer`
  background-color: #eeeeee;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter className="p-3">
      <Row className="align-items-center">
        <Col>
          <Code>git</Code>
          <Button
            variant="link"
            href="https://github.com/ardamutlu/todo-list-web"
            target="_blank"
          >
            repository
          </Button>
        </Col>
        <Col className="text-end">© 2022 Rise Tech</Col>
      </Row>
    </StyledFooter>
  );
};

export default Footer;
