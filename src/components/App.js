import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header/header.component";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user/user.actions";
import Landing from "./landing/Landing.component";
import CheckoutForm from "./checkout/checkout.container";
import NewFabForm from "./newFab/newFab.component";

const Dashboard = () => <h2>Dashboard</h2>;

const App = (props) => {
  const { fetchUser } = props;
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/fab/new" component={NewFabForm} />
          <Route exact path="/checkout" component={CheckoutForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default connect(null, { fetchUser })(App);
