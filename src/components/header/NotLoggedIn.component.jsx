import React from "react";
import { connect } from "react-redux";
import { signIn } from "../../redux/user/user.actions";

const NotLoggedIn = ({ signIn }) => {
  return <a href="/auth/google">LOG IN WITH GOOGLE</a>;
};

export default connect(null, { signIn })(NotLoggedIn);
