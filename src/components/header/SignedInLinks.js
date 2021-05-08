import React from "react";
import { NavLink } from "react-router-dom";

function SignedInLinks() {
  return (
    <div className="right">
      <li>
        <NavLink to="/logout">Logout</NavLink>
      </li>
    </div>
  );
}

export default SignedInLinks;
