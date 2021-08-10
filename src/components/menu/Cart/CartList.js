import { Fragment, useContext } from "react";
import CartItems from "./CartItems";
import CartContext from "../../store/cart-context";

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
    alert("Your Order has been placed successfully!");
  };

  return (
    <Fragment>
      <CartItems />
      <div>
        <span>Total Price</span>
        <span>&#8377; {totalPrice}</span>
      </div>
      <div>
        <button onClick={props.onHide}>
          Close
        </button>
        {hasItems && (
          <button onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </Fragment>
  );
};

export default CartList;
