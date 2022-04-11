import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Login from "./components/Login";
import "./index.css"

function App() {
  return (
    <Router>
      <div className="flex justify-center items-center mt-10">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
