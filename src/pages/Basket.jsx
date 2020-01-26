import React from "react";
import { withRouter } from "react-router-dom";
import BasketItem from "../components/BasketItem";
import BasketTotal from "../components/BasketTotal";
import { Container } from "react-bootstrap";

const Basket = props => {
  return (
    <div>
      <Container
        style={{
          paddingTop: "30px",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <div>
          <h1>My Bag</h1>
          <hr />
          <BasketItem />
          <BasketItem />
          <BasketItem />
          <BasketItem />
          <BasketItem />
        </div>

        <div>
          <BasketTotal />
        </div>
      </Container>
    </div>
  );
};

export default withRouter(Basket);
