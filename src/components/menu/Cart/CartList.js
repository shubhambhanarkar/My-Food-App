import { useContext } from "react";
import CartItems from "./CartItems";
import CartContext from "../../store/cart-context";

import { Modal, ModalBody, Button } from "reactstrap";

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
    <Modal isOpen={props.onShow} centered={true} backdrop="static">
      <ModalBody>
        <CartItems />
        <div
          style={{
            fontWeight: "bolder",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1.5rem",
          }}
        >
          <span>Total Price</span>
          <span>&#8377; {totalPrice}</span>
        </div>
        <div style={{ textAlign: "end" }}>
          <Button onClick={props.onHide} style={{ backgroundColor: "#720D72" }}>
            Close
          </Button>{" "}
          {hasItems && (
            <Button
              onClick={orderHandler}
              style={{ backgroundColor: "#720D72" }}
            >
              Order
            </Button>
          )}
        </div>
      </ModalBody>
    </Modal>
  );
};

export default CartList;
