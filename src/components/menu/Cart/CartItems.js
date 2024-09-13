import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { addItem, removeItem } from "../../store/cart-store";

const CartItems = () => {
  const cartValue = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <ul style={{ paddingLeft: "0%" }}>
      {cartValue.items.map((item) => {
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
                  onClick={dispatch(addItem(item))}
                  style={{ backgroundColor: "#720D72", fontWeight: "bolder" }}
                >
                  +
                </Button>{" "}
                <Button
                  onClick={dispatch(removeItem(item))}
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
