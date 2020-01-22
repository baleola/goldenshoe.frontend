import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Card } from "react-bootstrap";
import ProductItems from "./ProductItems";
import { withRouter } from "react-router-dom";

const productCardLarge = props => {
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
              <img src={props.imgUrl} alt=" Item" />
            </Card>
          </td>
          <td>
            <Card border="light" style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Title>{props.item}</Card.Title>
                <Card.Text>{props.price}</Card.Text>
                <Card.Text>Description</Card.Text>
                <hr />

                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button>Add To Basket</Button>
              </Card.Body>
            </Card>
          </td>
        </tbody>
      </Table>
    </div>
  );
};

export default withRouter(productCardLarge);
