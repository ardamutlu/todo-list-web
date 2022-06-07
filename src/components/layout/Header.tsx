import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

const StyledHeader = styled.header`
  border-bottom: 1px solid #eeeeee;
`;

const Logo = styled.div``;

const Header: React.FC = () => {
  return (
    <StyledHeader className="p-3">
      <Row>
        <Col>
          <Logo>Logo</Logo>
        </Col>
      </Row>
    </StyledHeader>
  );
};

export default Header;
