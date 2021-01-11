import React from "react";
import { connect } from "react-redux";
import LoggedIn from "./loggedIn.component";
import NotLoggedIn from "./NotLoggedIn.component";
import { isLoggedIn } from "../../utils/isLoggedIn";
import { Link } from "react-router-dom";

const Header = ({ currentUser }) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={currentUser ? "/dashboard" : "/"} className="left brand-logo">
          Fab Shop
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>{isLoggedIn(currentUser)}</li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.user.current_user,
});

export default connect(mapStateToProps)(Header);

// <li>
//             <a href="/">Log in with Google</a>
//           </li>
