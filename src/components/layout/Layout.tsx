import React from "react";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import Content from "@components/layout/Content";

const Layout: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Header />
        </Col>
        <Col xs={12}>
          <Content>
            <Outlet />
          </Content>
        </Col>
        <Col xs={12}>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
