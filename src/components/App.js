import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header/header.component";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user/user.actions";

const Dashboard = () => <h2>Dashboard</h2>;
const NewFab = () => <h2>NewFab</h2>;
const Landing = () => <h2>Landing</h2>;

const App = (props) => {
  const { fetchUser } = props;
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

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

export default connect(null, { fetchUser })(App);
