import { useContext, useRef, useState } from "react";
import AuthContext from "../store/auth-context";
import CartContext from "../store/cart-context";
import classes from "./CartInput.module.css";

const CartInput = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputRef = useRef();
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const onAddItemHandler = (event) => {
    event.preventDefault();

    const enteredAmount = inputRef.current.value;
    const amount = +enteredAmount;

    if (enteredAmount.trim().length === 0 || amount < 1 || amount > 3) {
      setAmountIsValid(false);
      return;
    }

    if (!authCtx.isLoggedIn) {
      props.onShowLogin();
    } else {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      });
    }
  };
  return (
    <div className={classes.formItem}>
      <form onSubmit={onAddItemHandler}>
        <label htmlFor={props.id}>Amount</label>
        <input
          id={props.id}
          type="number"
          min="1"
          max="3"
          defaultValue="1"
          ref={inputRef} />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter valid amount (1 - 3)</p>}
      </form>
    </div>
  );
};

export default CartInput;
