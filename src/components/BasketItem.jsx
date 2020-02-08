import React from "react";
import { Media } from "react-bootstrap";

const BasketItem = props => {
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
            <h5>All Over Logo Triple S</h5>
            <p>£695.00</p>
            <p>QTY: 1</p>
          </Media.Body>
        </Media>
      </div>
      <hr />
    </div>
  );
};

export default BasketItem;
