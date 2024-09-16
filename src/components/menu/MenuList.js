import { useHistory } from "react-router-dom";
import MenuItems from "./MenuItems";
import CartIcon from "./Cart/CartIcon";

import { Card, Button, Container, Col, Row } from "reactstrap";
import { useSelector } from "react-redux";

const MenuList = (props) => {
  const history = useHistory();
  const items = useSelector((state) => state.cart.items);

  const logoutHandler = () => {
    history.replace("/");
  };
  return (
    <div>
      <Container>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <h1
              style={{
                color: "white",
                position: "relative",
                right: "4%",
                fontSize: "4rem",
              }}
            >
              Food App
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              type="button"
              onClick={props.onShow}
              style={{
                backgroundColor: "#720D72",
                float: "right",
              }}
            >
              <CartIcon />
              <span
                style={{ fontWeight: "bold", fontSize: "1.25rem" }}
              >{`(${items.length})`}</span>
            </Button>
          </Col>
          <Col>
            <Button
              onClick={logoutHandler}
              style={{
                backgroundColor: "#720D72",
                textAlign: "center",
                width: "7rem",
                height: "2.5rem",
                fontWeight: "bold",
                borderRadius: "1.5rem",
                float: "right",
              }}
            >
              Logout
            </Button>
          </Col>
        </Row>
      </Container>
      <div style={{ padding: "2rem" }}>
        <Card
          style={{
            borderRadius: "1rem",
            padding: "2rem",
            boxShadow: "0.2rem 0.2rem #000000",
            borderWidth: "0.15rem",
          }}
        >
          <MenuItems />
        </Card>
      </div>
    </div>
  );
};

export default MenuList;
