import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";

import MenuItems from "./MenuItems";
import CartIcon from "./Cart/CartIcon";

import CartContext from "../store/cart-context";

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
      <div style={{textAlign: "center"}}>
        <h1>S&#8523;M</h1>
        <button onClick={logoutHandler}>Logout</button>
        <button type="button" onClick={props.onShow}>
          <CartIcon />
          <span>{numberOfCartItems}</span>
        </button>
      </div>
      <MenuItems />
    </div>
  );
};

export default MenuList;
