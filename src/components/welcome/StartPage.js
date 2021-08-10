import { useState } from "react";
import Signup from "./UserInfo/Signup";

import LoginForm from "./UserInfo/LoginForm";
import classes from "./StartPage.module.css";
import MenuItems from "../Menu/MenuItems";
import Card from "../UI/Card";

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
    <div className={classes.page}>
      {showSignup && <Signup onClose={hideSignupHandler} />}
      <div className={classes.heading}>
        <h1>S&#8523;M</h1>
        <button onClick={showLoginHandler}>Login</button>
        <button onClick={showSignupHandler}>Signup</button>
      </div>
      {showLogin && (
        <div className={classes.form}>
          <LoginForm onClose={hideLoginHandler} />
        </div>
      )}
      <div className={classes.menu}>
        <Card>
          <MenuItems onShowLogin={showLoginHandler} />
        </Card>
      </div>
    </div>
  );
};

export default StartPage;
