import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header/header.component";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user/user.actions";
import Landing from "./landing/Landing.component";
import CheckoutForm from "./checkout/checkout.container";
import NewFabForm from "./newFab/newFab.component";
import PrivateRoute from "../routers/PrivateRoute";
import Dashboard from "./dashboard/Dashboard";
import BuyCredits from "./buyCredits/BuyCredits.container";

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
          <PrivateRoute
            path="/checkout"
            component={CheckoutForm}
            authed={currentUser}
          />
          <PrivateRoute
            path="/buy_credits"
            component={BuyCredits}
            authed={currentUser}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  currentUser: state.user,
});

export default connect(mapStateToProps, { fetchUser })(App);
