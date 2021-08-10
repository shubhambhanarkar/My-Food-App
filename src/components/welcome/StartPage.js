import { useState } from "react";
import Signup from "./UserInfo/Signup";

import LoginForm from "./UserInfo/LoginForm";
import MenuItems from "../menu/MenuItems";

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
      <div style={{textAlign: "center"}}>
        <h1>S&#8523;M</h1>
        <button onClick={showLoginHandler}>Login</button>
        <button onClick={showSignupHandler}>Signup</button>
      </div>
      {showLogin && <LoginForm onClose={hideLoginHandler} />}
      {showSignup && <Signup onClose={hideSignupHandler} />}
        <MenuItems onShowLogin={showLoginHandler} />
    </div>
  );
};

export default StartPage;
