import { Redirect, Route, Switch } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Menu from "./pages/Menu";
import AuthContext from "./components/store/auth-context";
import { Suspense, useContext } from "react";
import CartContextProvider from "./components/store/CartProvider";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Suspense fallback={<h2 style={{ textAlign: "center" }}>Loading...</h2>}>
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <CartContextProvider>
          <Route path="/menu">
            {authCtx.isLoggedIn && <Menu />}
            {!authCtx.isLoggedIn && <Redirect to="/" />}
          </Route>
        </CartContextProvider>
        )
      </Switch>
    </Suspense>
  );
}

export default App;
