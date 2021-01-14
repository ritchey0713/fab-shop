import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from "../../redux/user/user.actions";

const NotLoggedIn = ({ signIn }) => (
  <a href="/auth/google">LOG IN WITH GOOGLE</a>
);

export default connect(null, { signIn })(NotLoggedIn);
