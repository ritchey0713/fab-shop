import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header/header.component";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user/user.actions";
import Landing from "./landing/Landing.component";
import CheckoutForm from "./checkout/checkout.container";
import NewFabForm from "./newFab/newFab.component";
import PrivateRoute from "../routers/PrivateRoute";

const Dashboard = () => <h2>Dashboard</h2>;

const App = (props) => {
  const { fetchUser, currentUser } = props;
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  console.log(currentUser);

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <PrivateRoute
            currentUser={currentUser}
            exact
            path="/dashboard"
            component={Dashboard}
          />
          <Route exact path="/fab/new" component={NewFabForm} />
          <Route exact path="/checkout" component={CheckoutForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  currentUser: state.user.current_user,
});

export default connect(mapStateToProps, { fetchUser })(App);
