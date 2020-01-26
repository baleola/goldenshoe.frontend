import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import ProductCardLarge from "../components/LargeProductCard";
import productService from "../components/services/productService";

const Product = props => {
  const productId = props.match.params.id;

  const [product, setproduct] = useState({});

  useEffect(() => {
    getProduct();
  });

  const getProduct = async () => {
    let res = await productService.getById(productId);
    console.log(res);
    setproduct(res);
  };

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
