import { useState } from "react";

import CartList from "../components/Menu/Cart/CartList";
import MenuList from "../components/Menu/MenuList";

const Menu = () => {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <div>
      {showCart && <CartList onShow={showCartHandler} onHide={hideCartHandler} />}
      <MenuList onShow={showCartHandler} />
    </div>
  );
};

export default Menu;
