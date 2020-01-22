import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import productItems from "../components/ProductItems";

const createCard = productItems => {
  return (
    <ProductCard
      key={productItems.id}
      id={productItems.id}
      img={productItems.imgURL}
      item={productItems.item}
      price={productItems.price}
      isInStock={productItems.isInStock}
    />
  );
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
