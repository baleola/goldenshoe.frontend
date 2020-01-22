import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const ProductCard = props => {
  return (
    <div>
      <Card style={{ width: "17rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.item}</Card.Title>
          <Card.Text>
            {props.price}
            {!props.isInStock ? " - Out of Stock" : null}
          </Card.Text>
          <Button variant="primary" href={`/products/${props.id}`}>
            More Info
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default withRouter(ProductCard);
