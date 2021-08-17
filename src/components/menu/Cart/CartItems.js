import { useContext } from "react";
import CartContext from "../../store/cart-context";

import { Button, Container, Row, Col } from "reactstrap";

const CartItems = () => {
  const cartCtx = useContext(CartContext);
  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  return (
    <Container style={{ paddingLeft: "0%" }}>
      {cartCtx.items.map((item) => {
        return (
          <div key={item.id}>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <Col>
                <h4>{item.name}</h4>
              </Col>
              <Col>
                <p
                  style={{
                    color: "#720D72",
                    fontWeight: "bolder",
                    fontSize: "1.5rem",
                  }}
                >
                  &#8377; {item.price}
                </p>
              </Col>
              <Col>
                <p style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
                  x{item.amount}
                </p>
              </Col>
              <Col>
                <Button
                  onClick={addItemHandler.bind(null, item)}
                  style={{ backgroundColor: "#720D72", fontWeight: "bolder" }}
                >
                  +
                </Button>{" "}
                <Button
                  onClick={removeItemHandler.bind(null, item.id)}
                  style={{ backgroundColor: "#720D72", fontWeight: "bolder" }}
                >
                  -
                </Button>
              </Col>
            </Row>
            <hr size="3" width="100%" />
          </div>
        );
      })}
    </Container>
  );
};

export default CartItems;
