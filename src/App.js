import "./styles.css";
import { LogIn } from "./components/LogIn/LogIn";
import useLogin from "./hooks/useLogin";

export default function App() {
  const state = useLogin();

  return (
    <div className="App">
      <LogIn state={state}></LogIn>
      {/* <UserPage state={state}></UserPage> */}
    </div>
  );
}
