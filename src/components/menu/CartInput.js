import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { addItem } from "../store/cart-store";

const CartInput = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const onAddItemHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const amount = +enteredAmount;
    if (enteredAmount.trim().length === 0 || amount < 1 || amount > 3) {
      setAmountIsValid(false);
      return;
    }
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: 1,
    };
    dispatch(addItem(item));
  };
  return (
    <div>
      <form onSubmit={onAddItemHandler}>
        <label htmlFor={props.id} style={{ fontWeight: "bold" }}>
          Amount
        </label>{" "}
        <input
          id={props.id}
          type="number"
          min="1"
          max="3"
          defaultValue="1"
          ref={inputRef}
          style={{ width: "2.5rem" }}
        />
        <Button
          style={{
            backgroundColor: "#720D72",
            borderRadius: "1.5rem",
            color: "white",
            fontWeight: "bolder",
            padding: "0.25rem 1.5rem",
          }}
        >
          + Add
        </Button>
        {!amountIsValid && <p>Please enter valid amount (1 - 3)</p>}
      </form>
    </div>
  );
};

export default CartInput;
