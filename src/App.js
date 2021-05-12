import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Body from "./components/body/Body";
import Login from "./components/header/Signin";
import NavBar from "./components/header/NavBar";
import Signup from "./components/header/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Body} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
