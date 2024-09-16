import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { AuthStore } from "./components/store/auth-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={AuthStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
