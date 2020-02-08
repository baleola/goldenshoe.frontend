import React from "react";
import { Card, Button } from "react-bootstrap";

const BasketTotal = props => {
  return (
    <div>
      <Card bg="light" style={{ width: "18rem" }}>
        <Card.Header>Total</Card.Header>
        <Card.Body>
          <Card.Text>Sub-Total: £2780.00</Card.Text>
          <Card.Text>Delivery: Free</Card.Text>
          <hr />
          <Button>Checkout</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BasketTotal;
