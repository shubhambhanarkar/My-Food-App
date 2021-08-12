import { useState } from "react";

import Signup from "./UserInfo/Signup";
import LoginForm from "./UserInfo/LoginForm";
import MenuItems from "../menu/MenuItems";

import { Button, Card } from "reactstrap";

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
    <div>
      <h1 style={{ textAlign: "center", color: "white" }}>S&#8523;M</h1>
      <div style={{ textAlign: "center" }}>
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
        {"  "}
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
      </div>
      {showLogin && (
        <LoginForm onShow={showLogin} onClose={hideLoginHandler} />
      )}
      {showSignup && (
        <Signup onShow={showSignup} onClose={hideSignupHandler} />
      )}
      <div style={{ padding: "2rem" }}>
        <Card
          style={{
            borderRadius: "1rem",
            padding: "2rem",
            boxShadow: "0.2rem 0.2rem #888888",
            borderWidth: "0.15rem",
            opacity: "0.9"
          }}
        >
          <MenuItems onShowLogin={showLoginHandler} />
        </Card>
      </div>
    </div>
  );
};

export default StartPage;
