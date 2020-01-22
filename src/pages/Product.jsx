import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import productItems from "../components/ProductItems";
import { Table, Button, Card, Container } from "react-bootstrap";
/* import productCardLarge from "../components/LargeProductCard"; */

const Product = props => {
  // Get ID from url
  const productId = props.match.params.id;
  // find url in data
  const product = productItems.find(({ id }) => id === productId);
  // Redirect if product with ID doesnt exist
  if (!product) {
    return <Redirect to="/products" />;
  } else
    return (
      <div>
        <Container>
          <Table responsive>
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

                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button>Add To Basket</Button>
                  </Card.Body>
                </Card>
              </td>
            </tbody>
          </Table>
        </Container>
      </div>
    );
};

export default withRouter(Product);
