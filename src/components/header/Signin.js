import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { signIn } from "../../store/actions/authActions";

class Signin extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container left-align">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <form className="white" id="signInForm" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input type="email" id="email" onChange={this.handleChange} />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
              autoComplete="on"
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field">
            <button className="btn purple lighten-1 z-depth-0">Login</button>
            <div className="center red-text">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
