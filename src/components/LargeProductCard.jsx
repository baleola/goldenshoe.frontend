import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Card } from "react-bootstrap";

const ProductCardLarge = ({ product }) => {
  return (
    <div>
      <Table>
        <tbody>
          <td>
            <Card
              border="light"
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <img src={product.imgURL} alt=" Item" />
            </Card>
          </td>
          <td>
            <Card border="light" style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Title>{product.item}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Card.Text>Description</Card.Text>
                <hr />

                <Card.Text>{product.description}</Card.Text>
                <Button>Add To Basket</Button>
              </Card.Body>
            </Card>
          </td>
        </tbody>
      </Table>
    </div>
  );
};

export default ProductCardLarge;
