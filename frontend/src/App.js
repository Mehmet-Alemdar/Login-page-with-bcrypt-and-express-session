import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

import "./index.css"

function App() {
  return (
    <Router>
      <div className="flex justify-center items-center mt-10">
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
