import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function LandingPage({ loggedIn }) {
  return (
    <div className="App-landingPage">
      <Container
        style={{
          border: "solid",
          borderRadius: "30px",
          backgroundColor: "#000  ",
          opacity: "0.8",
        }}
      >
        <Row>
          <Col>
            <div>
              <h1>Horizon Beans</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              We sell high qaulity but affordable beans from around the world
            </p>
            <p>You'll never put a better bean on your knife.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
