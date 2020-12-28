import React from "react";
import { connect } from "react-redux";
import LoggedIn from "./loggedIn.component";
import NotLoggedIn from "./NotLoggedIn.component";

const Header = (props) => {
  console.log(props);
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="left brand-logo">
          Fab Shop
        </a>
        <ul className="right">
          {props.current_user ? <LoggedIn /> : <NotLoggedIn />}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state, ownProps) => ({
  current_user: state.user.current_user,
});

export default connect(mapStateToProps)(Header);

// <li>
//             <a href="/">Log in with Google</a>
//           </li>
