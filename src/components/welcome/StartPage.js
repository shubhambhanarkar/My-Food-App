import { useState } from "react";

import Signup from "./UserInfo/Signup";
import LoginForm from "./UserInfo/LoginForm";
import MenuItems from "../menu/MenuItems";

import { Button, Card, Container, Row, Col } from "reactstrap";

const StartPage = () => {
  const [showSignup, setShowSignup] = useState(false);
  const showSignupHandler = () => {
    setShowSignup(true);
  };
  const hideSignupHandler = () => {
    setShowSignup(false);
  };

  const [showLogin, setShowLogin] = useState(false);
  const showLoginHandler = () => {
    setShowLogin(true);
  };
  const hideLoginHandler = () => {
    setShowLogin(false);
  };

  return (
    <Container>
      {showLogin && <LoginForm onShow={showLogin} onClose={hideLoginHandler} />}
      {showSignup && <Signup onShow={showSignup} onClose={hideSignupHandler} />}
      <Row>
        <Col>
          <h1 style={{ textAlign: "center", color: "white", fontSize: "4rem" }}>
            S&#8523;M
          </h1>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "end" }}>
          <Button
            onClick={showLoginHandler}
            style={{
              textAlign: "center",
              width: "7rem",
              height: "2.5rem",
              fontWeight: "bold",
              backgroundColor: "#720D72",
              borderRadius: "1.5rem",
            }}
          >
            Login
          </Button>
        </Col>
        {"  "}
        <Col>
          <Button
            onClick={showSignupHandler}
            style={{
              textAlign: "center",
              width: "7rem",
              height: "2.5rem",
              fontWeight: "bold",
              backgroundColor: "#720D72",
              borderRadius: "1.5rem",
            }}
          >
            Signup
          </Button>
        </Col>
      </Row>
      <Row style={{ padding: "2rem 0rem" }}>
        <Card
          style={{
            borderRadius: "1rem",
            padding: "2rem",
            boxShadow: "0.2rem 0.2rem #000000",
            borderWidth: "0.15rem",
          }}
        >
          <MenuItems onShowLogin={showLoginHandler} />
        </Card>
      </Row>
    </Container>
  );
};

export default StartPage;
