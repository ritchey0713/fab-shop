import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/header/header.component";

export const PrivateRoute = ({
  currentUser,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        return currentUser ? (
          <div>
            <Header />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

export default PrivateRoute;
