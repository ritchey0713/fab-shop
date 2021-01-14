import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../redux/user/user.actions";

const LoggedIn = ({ logoutUser }) => {
  const history = useHistory();
  const buttonOnClick = () => {
    logoutUser();
    history.push("/");
  };

  return (
    <button className="btn-flat white-text" onClick={buttonOnClick}>
      Logout!
    </button>
  );
};

export default connect(null, { logoutUser })(LoggedIn);
