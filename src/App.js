import { Redirect, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Menu from "./pages/Menu";
import { Suspense } from "react";
import { Provider, useSelector } from "react-redux";
import { CartStore } from "./components/store/cart-store";

function App() {
  const authValue = useSelector((state) => state.auth);
  return (
    <Suspense fallback={<h2 style={{ textAlign: "center" }}>Loading...</h2>}>
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Provider store={CartStore}>
          <Route path="/menu">
            {authValue.isLoggedIn && <Menu />}
            {!authValue.isLoggedIn && <Redirect to="/" />}
          </Route>
        </Provider>
      </Switch>
    </Suspense>
  );
}

export default App;
