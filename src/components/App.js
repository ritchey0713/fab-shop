import React, { Suspense, useEffect, lazy, Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header/header.component";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user/user.actions";
import Landing from "./landing/Landing.component";
import CheckoutForm from "./checkout/checkout.container";
import NewFabForm from "./newFab/newFab.component";
import PrivateRoute from "../routers/PrivateRoute";
//const PrivateRoute = lazy(() => import("../routers/PrivateRoute"));
import Dashboard from "./dashboard/Dashboard";

//const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const App = (props) => {
  const { fetchUser, currentUser } = props;
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <PrivateRoute
            authed={currentUser}
            path="/dashboard"
            component={Dashboard}
          />
          <Route exact path="/fab/new" component={NewFabForm} />
          <PrivateRoute path="/checkout" component={CheckoutForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  currentUser: state.user,
});

export default connect(mapStateToProps, { fetchUser })(App);
