import React from "react";

import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({
  authed,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      component={(props) => {
        console.log(authed, "IN IF");
        if (authed) {
          return <Component {...props} />;
        } else if (authed === false) {
          return <Redirect to={"/"} />;
        }
      }}
    />
  );
}
