import { getFirestore } from "redux-firestore";
import firebase from "firebase/app";

export const sendMessage = (props) => {
  const { From, To, content } = props;
  return (dispatch) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .doc(From)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          type: "sent",
          content: content,
          sentBy: From,
          receivedBy: To,
          timestamp: new Date(),
        }),
      })
      .then(() => {
        dispatch({ type: "MESSAGE_SENT_SUCCESSFULLY" });
      })
      .catch((err) => {
        dispatch({ type: "MESSAGE_SENT_ERROR)" }, err);
      });
    firestore
      .collection("users")
      .doc(To)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          type: "received",
          content: content,
          sentBy: From,
          receivedBy: To,
          timestamp: new Date(),
        }),
      })
      .then(() => {
        dispatch({ type: "MESSAGE_RECEIVED_SUCCESSFULLY" });
      })
      .catch((err) => {
        dispatch({ type: "MESSAGE_RECEIVED_ERROR)" }, err);
      });
  };
};
