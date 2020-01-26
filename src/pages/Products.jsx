import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
/* import productItems from "../components/ProductItems";*/
import productService from "../components/services/productService";
/*import productItems from "../components/ProductItems"; */

const Products = props => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    getProducts();
  });

  const getProducts = async () => {
    let res = await productService.getAll();
    console.log(res);
    setproducts(res);
  };

  const createCard = product => {
    return <ProductCard key={product.id} product={product} />;
  };

  return (
    <div>
      <Container>
        <Row>
          {products && products.length > 0 ? (
            products.map(product => createCard(product))
          ) : (
            <p>No products found</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
