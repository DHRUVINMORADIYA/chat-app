import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/body/Body";
import NavBar from "./components/header/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Body />
      </div>
    </BrowserRouter>
  );
}

export default App;
