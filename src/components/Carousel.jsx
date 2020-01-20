import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container, Button } from "react-bootstrap";

const Jumbo = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>SALE: FINAL REDUCTIONS</h1>
          <p>Order before 3pm and get your order tomorrow</p>

          <p>
            <Button variant="primary" href="/products">
              Shop Now
            </Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
