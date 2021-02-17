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
      render={(props) => {
        if (authed.currentUser) {
          return <Component {...props} />;
        } else if (authed.currentUser === false) {
          return <Redirect to={"/"} />;
        }
      }}
    />
  );
}
