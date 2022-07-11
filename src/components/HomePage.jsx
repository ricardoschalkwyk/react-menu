import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function HomePage(props) {
  return (
    <div className="App-Homepage">
      <Container>
        <Row>
          <Col>
            <h1>
              Who want to Provide you with easy access to every bean ever
              produced.
            </h1>
            <br />
            <h3>We will always strive to bring you the best service.</h3>
            <br />
            <h3>
              We have the best farmers in the world to produce these amazing
              beans.
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
