import { React, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { compose } from "redux";
import Chat from "./chats/Chat";
import Contacts from "./contacts/Contacts";
import EmptyChat from "./chats/EmptyChat";

function Body(props) {
  const { auth, profile } = props;
  const [whichChatToShow, setWhichChatToShow] = useState("");

  if (!auth.uid) return <Redirect to="/login" />;
  return (
    <div className="row" id="body">
      <div className="col s1"></div>
      <div className="col s3">
        <Contacts
          contacts={profile.contacts}
          setWhichChatToShow={setWhichChatToShow}
        />
      </div>
      <div className="col s7">
        {whichChatToShow ? (
          <Chat profile={profile} whichChatToShow={whichChatToShow} />
        ) : (
          <EmptyChat />
        )}
      </div>
      <div className="col s1"></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default compose(connect(mapStateToProps))(Body);
