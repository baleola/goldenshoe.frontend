import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import productItems from "../components/ProductItems";
import { Container } from "react-bootstrap";
import ProductCardLarge from "../components/LargeProductCard";

const Product = props => {
  // Get ID from url
  const productId = props.match.params.id;
  // find url in data
  const product = productItems.find(({ id }) => id === productId);
  // Redirect if product with ID doesnt exist
  if (!product) {
    return <Redirect to="/products" />;
  } else
    return (
      <div>
        <Container>
          <ProductCardLarge product={product} />
        </Container>
      </div>
    );
};

export default withRouter(Product);
