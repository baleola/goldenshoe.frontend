import React from "react";
import { Media } from "react-bootstrap";

const BasketItem = ({ product }) => {
  return (
    <div>
      <div>
        <Media>
          <img
            style={{ width: "100px", height: "100px", paddingRight: "10px" }}
            src="https://www.balenciaga.com/66/11/11732113ww_14_a_f.jpg"
            alt="shoe-pic"
          />
          <Media.Body>
            <h5>{product.item}</h5>
            <p>{product.price}</p>
            <p>QTY: 2</p>
          </Media.Body>
        </Media>
      </div>
      <hr />
    </div>
  );
};

export default BasketItem;
