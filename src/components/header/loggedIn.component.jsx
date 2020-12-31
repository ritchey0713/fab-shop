import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/user/user.actions";

const LoggedIn = ({ logoutUser }) => {
  const buttonOnClick = () => {
    logoutUser();
  };

  return (
    <li>
      <button onClick={buttonOnClick}>Logout!</button>
    </li>
  );
};

export default connect(null, { logoutUser })(LoggedIn);
