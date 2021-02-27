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
  const state = useLogin();

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
            return state.isUserAuthenticated ? (
              <Redirect to="/hierarchy" />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />

        <Route
          exact
          path="/login"
          render={() => <LogIn state={state}></LogIn>}
        />

        <Route
          exact
          path="/hierarchy"
          render={() => <Hierarchy state={state}></Hierarchy>}
        />
      </Switch>
    </Router>
  );
}
