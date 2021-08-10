import { useRef, useState } from "react";

import Modal from "../../UI/Modal";
import classes from "./Signup.module.css";

const Signup = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [validInput, setValidInput] = useState(false);

  const closeIconHandler = () => {
    props.onClose();
  };

  const submitSignupHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    if (
      enteredEmail.trim().includes("@") &&
      enteredPassword.trim().length > 6
    ) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDrmZawhyXGL4iBNSFfz12p7YTv6XNxCQs",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return response.json().then(() => {
              let errorMessage = "Authentication Failed!";
              alert(errorMessage);
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          props.onClose(false);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      setValidInput(false);
      if (!validInput) {
        alert("Please Enter valid Email and Passowrd!");
      }
    }
  };
  return (
    <Modal onCloseSignup={props.onClose}>
      <form className={classes.completeForm} onSubmit={submitSignupHandler}>
        <div>
          <span onClick={closeIconHandler}>&times;</span>
        </div>
        <div>
          <label htmlFor="email" />
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            ref={emailRef}
          />
        </div>

        <div>
          <label htmlFor="password" />
          <input
            id="password"
            type="text"
            placeholder="New Password"
            ref={passwordRef}
          />
        </div>
        <div>
          <button type="submit">SignUp</button>
        </div>
      </form>
    </Modal>
  );
};

export default Signup;
