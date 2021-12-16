import React, { Component }  from 'react';
import { Route, Navigate, Router } from "react-router-dom";
import "./App.css";
// the below components will be created shortly
import Login from "./components/login";
import Groupchat from "./components/Groupchat";
class App extends Component {
 render() {
    return (
      <Router>
        <Navigate exact from="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/chat" component={Groupchat} />
      </Router>
    );
  }
}

export default App;