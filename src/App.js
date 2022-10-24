import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Body from "./components/Body";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Dashboard />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
