import "./App.css";
import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import Others from "./Components/Admin/Others/Others";
function App() {
  return (
    <div className="App">
      <Router>
      <div>
      
        <Switch>
          <Route exact  path="/">
          <Home/>
       
          </Route>
          <Route path="/admin">
          <Dashboard/>
          </Route>
          <Route path="/other">
          <Dashboard/>

          {/* <Others/> */}
          </Route>
          <Route path="*">
          <h1>Fuck uh </h1>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
