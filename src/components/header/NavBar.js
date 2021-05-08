import React from "react";
import { Link } from "react-router-dom";
import SignedOutLinks from "./SignedOutLinks";

function NavBar() {
  const links = <SignedOutLinks />;

  return (
    <nav>
      <div className="nav-wrapper purple lighten-1">
        <Link to="/" className="brand-logo">
          justChat
        </Link>
        {links}
      </div>
    </nav>
  );
}

export default NavBar;
