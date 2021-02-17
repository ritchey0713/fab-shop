import React from "react";

import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({
  authed,
  redirectRoute,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authed.currentUser && redirectRoute) {
          return <Redirect to={redirectRoute} />;
        }
      }}
    />
  );
}
