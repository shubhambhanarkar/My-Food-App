import { useState, useEffect } from "react";

import CartInput from "./CartInput";
import classes from "./MenuItems.module.css";

const MenuItems = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const response = await fetch(
        "https://my-food-app-1b7c2-default-rtdb.firebaseio.com/Menu.json"
      );
      if (!response.ok) {
        throw new Error("Something went Wrong!");
      }
      const responseData = await response.json();

      const loadedItems = [];

      for (const item in responseData) {
        loadedItems.push({
          id: responseData[item].id,
          name: responseData[item].name,
          price: responseData[item].price,
          description: responseData[item].description,
        });
      }
      setItems(loadedItems);
      setLoading(false);
    };
    fetchItems().catch((error) => {
      throw new Error(error.mesage);
    });
  }, []);

  const showLoginOnAdd = () => {
    props.onShowLogin();
  };

  const itemsList = items.map((item) => {
    return (
      <li
        key={item.id}
        className={classes.listItem}
        style={{ listStyle: "none" }}
      >
        <div className={classes.topInfo}>
          <h3>{item.name}</h3>
          <p className={classes.price}>&#8377; {item.price}</p>
        </div>
        <div className={classes.bottomInfo}>
          <p>{item.description}</p>
          <CartInput
            id={item.id}
            name={item.name}
            price={item.price}
            onShowLogin={showLoginOnAdd}
          />
        </div>
      </li>
    );
  });

  return (
    <ul>
      {loading && <h2 style={{ textAlign: "center" }}>Loading...</h2>}
      {!loading && itemsList}
    </ul>
  );
};

export default MenuItems;
