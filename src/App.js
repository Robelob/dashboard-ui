import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import Login from "./components/pages/Login";

function App(props) {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/users/add" component={AddUser}></Route>
          <Route exact path="/users/edit/:id" component={EditUser}></Route>
          <Route exact path="/users/:id" component={User}></Route>
          <Route exact path="/login" component={Login}></Route>

          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
