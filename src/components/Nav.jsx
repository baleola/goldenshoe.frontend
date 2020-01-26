import React from "react";
import { Button, Form, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Router>
      <div style={{ paddingBottom: "10px" }}>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Golden Shoe</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
          </Nav>
          <Form inline>
            <Button variant="outline-info" href="/basket">
              Basket
            </Button>
          </Form>
        </Navbar>
      </div>
    </Router>
  );
};

export default NavigationBar;
