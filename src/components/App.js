import React, { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./header/header.component";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user/user.actions";
import Landing from "./landing/Landing.component";
import CheckoutForm from "./checkout/checkout.container";
import NewFabForm from "./newFab/newFab.component";
import PrivateRoute from "../routers/PrivateRoute";
import RedirectRoute from "../routers/RedirectRoute";
import Dashboard from "./dashboard/Dashboard";
import BuyCredits from "./buyCredits/BuyCredits.container";
import SurveyForm from "./newSurvey/newSurvey.comp";
import NewSurvey from "./otherNewSurvey/otherNewSurvey.comp";

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
          <PrivateRoute
            exact
            authed={currentUser}
            path="/dashboard"
            component={Dashboard}
          />
          <RedirectRoute
            exact
            path="/"
            redirectRoute="/dashboard"
            authed={currentUser}
            component={Landing}
          />

          <Route exact path="/fab/new" component={NewFabForm} />
          <PrivateRoute
            path="/checkout"
            component={CheckoutForm}
            authed={currentUser}
          />
          <PrivateRoute
            path="/survey/new"
            component={NewSurvey}
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
