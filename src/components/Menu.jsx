import React from "react";
import { Container, Dropdown, Nav, Navbar, sticky } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function onLinkClick(e) {
  e = null;
}

// trying to stop page refresh
function Menu() {
  function onLinkClick(e) {
    e.preventDefault();
  }
  //
  return (
    // <Navbar
    //   bg="dark"
    //   variant="dark"
    //   style={{
    //     position: "absolute",
    //     right: 10,
    //     top: 5,
    //   }}
    // >
    //   <Container>
    //     <Navbar.Brand>Menu</Navbar.Brand>
    //     <Nav className="me-auto">
    //       <Nav.Link href="/">Home</Nav.Link>

    //       <Nav.Link href="/Profile">Profile</Nav.Link>

    //       <Nav.Link href="/Products">Shop</Nav.Link>
    //     </Nav>
    //   </Container>
    // </Navbar>

    <Dropdown
      className="d-inline mx-2"
      style={{
        position: "absolute",
        right: 10,
        top: 5,
      }}
    >
      <Dropdown.Toggle id="dropdown-autoclose-true">
        Default Dropdown
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item to="/" exact as={NavLink}>
          Home Item
        </Dropdown.Item>

        <Dropdown.Item to="/profile" as={NavLink}>
          Profile Item
        </Dropdown.Item>

        <Dropdown.Item to="/products" as={NavLink}>
          Products Item
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Menu;
