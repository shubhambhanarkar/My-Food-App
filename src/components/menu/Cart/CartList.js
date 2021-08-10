import { useContext } from "react";
import Modal from "../../UI/Modal";
import CartItems from "./CartItems";
import CartContext from "../../store/cart-context";

import classes from "./CartList.module.css";

const CartList = (props) => {
  const cartCtx = useContext(CartContext);
  const totalPrice = cartCtx.totalPrice;
  const hasItems = cartCtx.items.length > 0;

  const orderHandler = async () => {
    await fetch(
      "https://my-food-app-1b7c2-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          order: cartCtx.items,
        }),
      }
    );
    props.onHide();
    alert('Your Order has been placed successfully!')
  };

  return (
    <Modal onCloseCart={props.onHide}>
      <CartItems />
      <div className={classes.total}>
        <span>Total Price</span>
        <span>&#8377; {totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHide}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default CartList;
