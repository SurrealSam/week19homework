import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from "./components/homepage";

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
