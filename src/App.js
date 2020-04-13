import React from "react";
import home from "./components/Home";
//import assessments from "./components/Assessments";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css"; //from reactstrap
//   <Route component={assessments} />
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
