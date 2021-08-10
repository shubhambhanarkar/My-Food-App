import ReactDOM from "react-dom";
import { Fragment } from "react";

import classes from "./Modal.module.css";

const Backdrop = ({ onCloseLogin, onCloseSignup, onCloseCart }) => {
  return (
    <div
      className={classes.backdrop}
      onClick={() => {
        if (onCloseLogin) onCloseLogin();
        if (onCloseSignup) onCloseSignup();
        if (onCloseCart) onCloseCart();
      }}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop {...props} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
