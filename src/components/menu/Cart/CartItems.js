import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./CartItems.module.css";

const CartItems = () => {
  const cartCtx = useContext(CartContext);
  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  return (
    <ul className={classes.cartItems}>
      {cartCtx.items.map((item) => {
        return (
          <div className={classes.items} key={item.id}>
            <h3>{item.name}</h3>
            <p>&#8377; {item.price}</p>
            <p>x{item.amount}</p>
            <div className={classes.actions}>
              <button onClick={addItemHandler.bind(null, item)}>+</button>
              <button onClick={removeItemHandler.bind(null, item.id)}>-</button>
            </div>
          </div>
        );
      })}
    </ul>
  );
};

export default CartItems;
