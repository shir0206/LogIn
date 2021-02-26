import "./styles.css";
import { LogIn } from "./components/LogIn/LogIn";
import { Hierarchy } from "./components/Hierarchy/Hierarchy";
import useLogin from "./hooks/useLogin";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default function App() {
  const state = useLogin();

  return (
    <Router>
      <NavLink
        activeClassName="active"
        to="/hierarchy"
        className="btn"
      ></NavLink>

      <Route exact path="" render={() => <LogIn state={state}></LogIn>} />

      <Route
        exact
        path="/hierarchy"
        render={() => <Hierarchy state={state}></Hierarchy>}
      />
    </Router>
  );
}
