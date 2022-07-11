import React from "react";
import PropTypes from "prop-types";
import { Button, Container } from "react-bootstrap";
import Menu from "./Menu";

// const handleClick = (event) => {
//   event.currentTarget.remove = true;
// };

function Header({ loggedIn, name, setLoggedIn }) {
  return (
    <header className="App-header" style={{ position: "relative" }}>
      {loggedIn ? <h1 className="logo">HB</h1> : null}

      {loggedIn ? <h1>Welcome {name}</h1> : <h1>Who is signing in?</h1>}

      {/* {loggedIn ? <h2>Please scroll down to see our products</h2> : null} */}

      <Container>
        <Button
          variant="secondary"
          onClick={() => {
            setLoggedIn(!loggedIn);
          }}
          style={{
            position: "absolute",
            left: 10,
            top: 5,
          }}
        >
          {loggedIn ? "Sign out" : "Sign in as kevin"}
        </Button>
        <Menu />
      </Container>
    </header>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
  name: PropTypes.string,
  setLoggedIn: PropTypes.func,
};

export default Header;
