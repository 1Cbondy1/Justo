import React from "react";
import { Router, Route } from "react-router-dom";
// import Navs from "./components/Nav"
import Dashboard1 from "./pages/Dashboard";
import ShowAccount from "./pages/Account";
import Landing from "./pages/Landing";
import Login from './pages/Login';
import history from './history';
import ShowScreenShare from "./pages/ScreenShare";


function App() {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard1} />
        <Route exact path="/signout" component={Landing} />
        <Route path="/account/:id" component={ShowAccount} />
        <Route exact path="/screenshare" component={ShowScreenShare} />

      </div>
    </Router>
  );
}

export default App;
