import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

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
    <Modal isOpen={props.onShow}>
      <ModalHeader>Login Form</ModalHeader>
      <ModalBody>
        <Form onSubmit={loginHandler}>
          <FormGroup>
            <Label htmlFor="email" />
            <Input
              id="email"
              type="text"
              placeholder="Email/Username"
              innerRef={emailRef}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password" />
            <Input
              id="password"
              type="password"
              placeholder="Password"
              innerRef={passwordRef}
            />
          </FormGroup>
          <FormGroup
            style={{
              textAlign: "center",
              paddingTop: "1rem",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              style={{
                width: "8rem",
                fontWeight: "bold",
                backgroundColor: "#720D72",
              }}
              type="submit"
            >
              Login
            </Button>
            <Button
              style={{ width: "6rem", fontWeight: "bold" }}
              type="button"
              onClick={props.onClose}
            >
              Close
            </Button>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default LoginForm;
