import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const LoginForm = (props) => {
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();

  const authCtx = useContext(AuthContext);

  const [validInputs, setValidInputs] = useState(true);

  const loginHandler = (event) => {
    event.preventDefault();

    let enteredEmail = emailRef.current.value;
    let enteredPassword = passwordRef.current.value;

    if (
      enteredEmail.trim().includes("@") &&
      enteredPassword.trim().length > 6
    ) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDrmZawhyXGL4iBNSFfz12p7YTv6XNxCQs",
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
          const expirationTime = new Date(
            new Date().getTime() + +data.expiresIn * 1000
          );
          authCtx.login(data.idToken, expirationTime.toISOString());
          history.replace("/menu");
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      setValidInputs(false);
      if (!validInputs) {
        alert("Please Enter valid Email and Passowrd!");
      }
    }
  };

  return (
    <div>
      <form onSubmit={loginHandler}>
        <div>
          <span onClick={props.onClose}>&times;</span>
        </div>
        <div>
          <label htmlFor="email" />
          <input
            id="email"
            type="text"
            placeholder="Email/Username"
            ref={emailRef}
          />
        </div>
        <div>
          <label htmlFor="password" />
          <input
            id="password"
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
