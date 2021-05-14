import React from "react";
import { connect } from "react-redux";

function InviteModal(props) {
  const { isInviteModalOpen, uid } = props;
  console.log("invite");
  if (isInviteModalOpen) {
    return <div>share this code: {uid}</div>;
  } else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps)(InviteModal);
