import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Profile = (props) => {
  return (
    <div className="App-Profile">
      <Container>
        <Row>
          <Col>
            <h1>This is your profile</h1>
            <h2>Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
            <h2>Email: {props.email}</h2>
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col>
            <h2>This is your color</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
