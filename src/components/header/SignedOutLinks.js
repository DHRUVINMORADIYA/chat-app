import React from "react";
import { NavLink } from "react-router-dom";

function SignedOutLinks() {
  return (
    <div className="right">
      <ul>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SignedOutLinks;
