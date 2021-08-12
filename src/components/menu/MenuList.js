import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";

import MenuItems from "./MenuItems";
import CartIcon from "./Cart/CartIcon";

import CartContext from "../store/cart-context";

import { Card, Button } from "reactstrap";

const MenuList = (props) => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/");
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "white" }}>S&#8523;M</h1>
        <Button
          type="button"
          onClick={props.onShow}
          style={{
            backgroundColor: "#720D72",
            position: "relative",
            left: "4%"
          }}
        >
          <CartIcon />
          <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
            {numberOfCartItems}
          </span>
        </Button>
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
      </div>
      <div style={{ padding: "2rem" }}>
        <Card
          style={{
            borderRadius: "1rem",
            padding: "2rem",
            boxShadow: "0.2rem 0.2rem #888888",
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
