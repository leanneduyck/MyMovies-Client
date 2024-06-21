import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const WelcomeView = () => {
  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center"
    >
      <Row>
        <Col className="text-center">
          <h1>Welcome to MyMovies!</h1>
          <p>
            {" "}
            If you are new here, please Sign Up; otherwise, you know what to
            do!.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
