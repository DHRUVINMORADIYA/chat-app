const initState = {
  authError: null,
};

const otherReducer = (state = initState, action) => {
  switch (action.type) {
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

    case "ACCEPT_SUCCESS":
      console.log("invite successaful");
      return {
        ...state,
      };

    case "ACCEPT_ERROR":
      console.log("invite unsuccessaful");
      return {
        ...state,
        error: action.err.message,
      };

    default:
      return state;
  }
};

export default otherReducer;
