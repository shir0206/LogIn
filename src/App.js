import "./styles.css";
import getData from "./connectDB/ConnectDB";
import { LogIn } from "./components/LogIn/LogIn";

export default function App() {
  return (
    <div className="App">
      <LogIn></LogIn>
    </div>
  );
}
