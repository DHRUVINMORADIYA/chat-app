const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Login failed",
      };

    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null,
      };

    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;

    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null,
      };

    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message,
      };

    case "MESSAGE_SENT_SUCCESSFULLY":
      console.log("message sent successfully");
      return {
        ...state,
      };

    case "MESSAGE_SENT_ERROR":
      console.log("message sent error");
      return {
        ...state,
      };

    case "MESSAGE_RECEIVED_SUCCESSFULLY":
      console.log("message received successfully");
      return {
        ...state,
      };

    case "MESSAGE_RECEIVED_ERROR":
      console.log("message received error");
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default authReducer;
