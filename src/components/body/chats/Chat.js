import React from "react";
import ChatBox from "./ChatBox";

function Chat(props) {
  const { profile, whichChatToShow } = props;
  return (
    <div className="card purple lighten-5" id="chatCard">
      <div className="card-content">
        <div className="row valign-wrapper">
          <div className="col s1">
            <img
              src="https://picsum.photos/50"
              alt=""
              className="circle responsive-img left"
            />
          </div>
          <div className="col s11">
            <span className="black-text left">
              {whichChatToShow.firstName} {whichChatToShow.lastName}
            </span>
          </div>
        </div>
        <ChatBox whichChatToShow={whichChatToShow} profile={profile} />
      </div>
    </div>
  );
}

export default Chat;
