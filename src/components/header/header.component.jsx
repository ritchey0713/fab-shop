import React from "react";

const Header = () => (
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

export default Header;
