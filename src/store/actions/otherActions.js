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
        dispatch({ type: "MESSAGE_SENT_ERROR" }, err);
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
        dispatch({ type: "MESSAGE_RECEIVED_ERROR" }, err);
      });
  };
};

export const acceptInvite = (props) => {
  const { acceptedBy, acceptedUser } = props;
  const firestore = getFirestore();
  let doc_acceptedBy = firestore
    .collection("users")
    .doc(acceptedBy)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      }
    });
  let doc_acceptedUser = firestore
    .collection("users")
    .doc(acceptedUser)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      }
    });

  return (dispatch) => {
    if (doc_acceptedBy && doc_acceptedUser) {
      doc_acceptedBy.then((doc_By) => {
        doc_acceptedUser.then((doc_User) => {
          console.log(doc_By, doc_User);
          firestore
            .collection("users")
            .doc(acceptedBy)
            .update({
              contacts: firebase.firestore.FieldValue.arrayUnion({
                ID: acceptedUser,
                firstName: doc_User.firstName,
                lastName: doc_User.lastName,
              }),
            })
            .then(() => {
              firestore
                .collection("users")
                .doc(acceptedUser)
                .update({
                  contacts: firebase.firestore.FieldValue.arrayUnion({
                    ID: acceptedBy,
                    firstName: doc_By.firstName,
                    lastName: doc_By.lastName,
                  }),
                })
                .then(() => {
                  dispatch({ type: "ACCEPT_SUCCESS" });
                })
                .catch((err) => {
                  dispatch({ type: "ACCEPT_ERROR" }, err);
                });
            });
        });
      });
    } else dispatch({ type: "ACCEPT_ERROR" });
  };
};
