import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
/*import productItems from "../components/ProductItems"; */
import { Container } from "react-bootstrap";
import ProductCardLarge from "../components/LargeProductCard";
import productService from "../components/services/productService";

const Product = props => {
  // Get ID from url
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
