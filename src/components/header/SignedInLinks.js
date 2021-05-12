import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";

function SignedInLinks(props) {
  console.log(props.profile);
  return (
    <div>
      <ul className="right">
        <li>
          <a href="/" onClick={props.signOut}>
            Log Out
          </a>
        </li>
        <li>
          <NavLink
            to="/"
            className="btn btn-floating purple lighten-5 purple-text"
          >
            {props.profile.initials}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
