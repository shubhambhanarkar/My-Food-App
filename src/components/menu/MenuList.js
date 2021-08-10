import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";

import Card from "../UI/Card";
import MenuItems from "./MenuItems";
import CartIcon from "./Cart/CartIcon";

import classes from "./MenuList.module.css";
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
    <div className={classes.bg}>
      <div className={classes.heading}>
        <h1>
          S&#8523;M
          <button className={classes.logout} onClick={logoutHandler}>
            Logout
          </button>
        </h1>
        <button
          type="button"
          className={classes.cartButton}
          onClick={props.onShow}
        >
          <CartIcon />
          <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
      </div>
      <Card>
        <ul className={classes.unList}>
          <MenuItems />
        </ul>
      </Card>
    </div>
  );
};

export default MenuList;
