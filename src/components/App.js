import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header/header.component";

const Dashboard = () => <h2>Dashboard</h2>;
const NewFab = () => <h2>NewFab</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/fab/new" component={NewFab} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
