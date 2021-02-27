import "./styles.css";
import { LogIn } from "./components/LogIn/LogIn";
import { Hierarchy } from "./components/Hierarchy/Hierarchy";
import useLogin from "./hooks/useLogin";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";

export default function App() {
  const loginState = useLogin();

  return (
    <Router>
      <NavLink
        activeClassName="active"
        to="/hierarchy"
        className="btn"
      ></NavLink>

      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return loginState.isUserAuthenticated ? (
              <Redirect to="/hierarchy" />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />

        <Route
          exact
          path="/login"
          render={() => <LogIn loginState={loginState}></LogIn>}
        />

        <Route
          exact
          path="/hierarchy"
          render={() => <Hierarchy loginState={loginState}></Hierarchy>}
        />
      </Switch>
    </Router>
  );
}
