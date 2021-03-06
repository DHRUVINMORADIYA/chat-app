import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { signUp } from "../../store/actions/authActions";

class Signup extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container left-align">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <form className="white" id="signInForm" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input type="email" id="email" onChange={this.handleChange} />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input type="password" id="password" onChange={this.handleChange} />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field">
            <input type="text" id="firstName" onChange={this.handleChange} />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field">
            <input type="text" id="lastName" onChange={this.handleChange} />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="input-field">
            <button className="btn purple lighten-1 z-depth-0">Sign Up</button>
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
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
