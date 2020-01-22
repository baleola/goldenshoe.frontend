import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import productItems from "../components/ProductItems";

const createCard = productItem => {
  return <ProductCard key={productItem.id} product={productItem} />;
};

const Products = props => {
  return (
    <div>
      <Container>
        <Row>{productItems.map(createCard)}</Row>
      </Container>
    </div>
  );
};

export default Products;
