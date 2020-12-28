import React from "react";
import { connect } from "react-redux";

const Header = (props) => {
  console.log(props);
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="left brand-logo">
          Fab Shop
        </a>
        <ul className="right">
          <li>
            <a href="/">Log in with Google</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state, ownProps) => ({
  current_user: state.user.current_user,
});

export default connect(mapStateToProps)(Header);
