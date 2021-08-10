import { useContext } from "react";
import CartContext from "../../store/cart-context";

import { Button } from "reactstrap";

const CartItems = () => {
  const cartCtx = useContext(CartContext);
  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  return (
    <ul style={{ paddingLeft: "0%" }}>
      {cartCtx.items.map((item) => {
        return (
          <div key={item.id}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>{item.name}</h4>
              <p
                style={{
                  color: "#720D72",
                  fontWeight: "bolder",
                  fontSize: "1.5rem",
                }}
              >
                &#8377; {item.price}
              </p>
              <p style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
                x{item.amount}
              </p>
              <div>
                <Button
                  onClick={addItemHandler.bind(null, item)}
                  style={{ backgroundColor: "#720D72", fontWeight: "bolder" }}
                >
                  +
                </Button>{" "}
                <Button
                  onClick={removeItemHandler.bind(null, item.id)}
                  style={{ backgroundColor: "#720D72", fontWeight: "bolder" }}
                >
                  -
                </Button>
              </div>
            </div>
            <hr size="3" width="100%" />
          </div>
        );
      })}
    </ul>
  );
};

export default CartItems;
