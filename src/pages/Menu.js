import { useState } from "react";

import CartList from "../components/menu/Cart/CartList";
import MenuList from "../components/menu/MenuList";

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
      {showCart && <CartList onShow={showCart} onHide={hideCartHandler} />}
      <MenuList onShow={showCartHandler} />
    </div>
  );
};

export default Menu;
