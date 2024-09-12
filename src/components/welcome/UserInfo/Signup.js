import { useRef, useState } from "react";
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

const Signup = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [validInput, setValidInput] = useState(false);

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
    <Modal isOpen={props.onShow}>
      <ModalHeader>SignUp Form</ModalHeader>
      <ModalBody>
        <Form onSubmit={submitSignupHandler}>
          <FormGroup>
            <Label htmlFor="email" />
            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              innerRef={emailRef}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password" />
            <Input
              id="password"
              type="text"
              placeholder="New Password"
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
              SignUp
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

export default Signup;
