import React from "react";
import { Container, Row } from "react-bootstrap";
import Product from "./Product";

function Products(props) {
  const listItems = props.items.map((item) => {
    return <Product key={item.id} {...item} />;
  });

  return (
    <Container>
      <Row>{listItems}</Row>
    </Container>
  );
}

export default Products;
