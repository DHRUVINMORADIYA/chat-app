import { React, useState } from "react";
import { connect } from "react-redux";
import { acceptInvite } from "../../../store/actions/otherActions";

function AcceptInviteModal(props) {
  const { isAcceptInviteModalOpen, error, uid, acceptInvite } = props;
  const [ID, setID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const toSend = {
      acceptedBy: uid,
      acceptedUser: ID,
    };
    acceptInvite(toSend);
    setID("");
  };
  if (isAcceptInviteModalOpen) {
    return (
      <div>
        <div className="input-field inline col s8">
          <input
            className="active"
            id="ID"
            type="text"
            value={ID}
            onChange={(e) => setID(e.target.value)}
          />
          <label htmlFor="ID">Type Code...</label>
        </div>
        <button
          className="btn waves-effect waves-light purple lighten-1"
          type="submit"
          name="action"
          onClick={handleSubmit}
        >
          accept
        </button>
        <div className="center red-text">{error ? <p>{error}</p> : null}</div>
      </div>
    );
  } else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return { uid: state.firebase.auth.uid };
};

const mapDispatchToProps = (dispatch) => {
  return {
    acceptInvite: (toSend) => dispatch(acceptInvite(toSend)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AcceptInviteModal);
