import { BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

import "./index.css"

function App() {
  return (
    <Router>
      <div className="grid place-items-center h-screen">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route  path="/register">
            <Register />
          </Route>
          <Route  path="/profile">
            <Profile />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
