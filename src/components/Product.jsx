import React from "react";
import { Col, Card } from "react-bootstrap";

const Product = (props) => {
  return (
    <Col>
      <Card
        style={{
          marginTop: "30px",
          marginBottom: "30px",
          borderRadius: "30px",
          border: "solid",
          overflow: "hidden",
        }}
      >
        <Card.Img
          variant="top"
          src={props.image}
          style={{ objectFit: "cover", height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{props.productName}</Card.Title>
          <Card.Text style={{ minHeight: "240px" }}>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
