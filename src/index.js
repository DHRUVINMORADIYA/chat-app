import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import thunk from "redux-thunk";
import fbConfig from "./config/fbConfig";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig, {
      userProfile: "users",
      useFirestoreForProfile: true,
      attachAuthIsReady: true,
    }),
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
