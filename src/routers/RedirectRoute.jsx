import React from "react";

import { Route, Redirect } from "react-router-dom";
import Landing from "../components/landing/Landing.component";

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
        } else {
          return <Landing />;
        }
      }}
    />
  );
}
