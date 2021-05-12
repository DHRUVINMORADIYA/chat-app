import React from "react";
import { Link } from "react-router-dom";
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";
import { connect } from "react-redux";

function NavBar(props) {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );

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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(NavBar);
