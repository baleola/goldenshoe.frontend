import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Card style={{ width: "17rem" }}>
        <Link to={`/products/${product._id}`}>
          <Card.Img variant="top" src={product.imgURL} />
        </Link>
        <Card.Body>
          <Card.Title>{product.item}</Card.Title>
          <Card.Text>
            {product.price}
            {product.stock === 0 ? " - Out of Stock" : null}
          </Card.Text>
          <Button variant="primary" href={`/products/${product._id}`}>
            More Info
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default withRouter(ProductCard);
