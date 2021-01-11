import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/user/user.actions";

const LoggedIn = ({ logoutUser }) => {
  const buttonOnClick = () => {
    logoutUser();
  };

  return (
    <button className="btn-flat white-text" onClick={buttonOnClick}>
      Logout!
    </button>
  );
};

export default connect(null, { logoutUser })(LoggedIn);
