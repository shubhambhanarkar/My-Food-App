import { useState, useEffect } from "react";

import CartInput from "./CartInput";

import { Col, Container, Row, Spinner } from "reactstrap";

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
      throw new Error(error.message);
    });
  }, []);

  const showLoginOnAdd = () => {
    props.onShowLogin();
  };

  const itemsList = items.map((item) => {
    return (
      <li key={item.id} style={{ listStyle: "none" }}>
        <Row>
          <Col>
            <h4>{item.name}</h4>
          </Col>
          <Col style={{ textAlign: "end" }}>
            <p
              style={{
                fontWeight: "bold",
                color: "#720D72",
                fontSize: "1.5rem",
              }}
            >
              &#8377; {item.price}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ fontWeight: "bold", color: "#720D72" }}>
              {item.description}
            </p>
          </Col>
          <Col style={{ textAlign: "end" }}>
            <CartInput
              id={item.id}
              name={item.name}
              price={item.price}
              onShowLogin={showLoginOnAdd}
            />
          </Col>
        </Row>
        <hr size="3" width="100%" />
      </li>
    );
  });

  return (
    <Container style={{ padding: "0%" }}>
      {loading && (
        <div style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
          <Spinner color="primary" type="grow" style={{ width: "3rem", height: "3rem" }} />
          <Spinner color="primary" type="grow" style={{ width: "3rem", height: "3rem" }} />
          <Spinner color="primary" type="grow" style={{ width: "3rem", height: "3rem" }} />
        </div>
      )}
      {!loading && itemsList}
    </Container>
  );
};

export default MenuItems;
