import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import MessageRecieved from "./MessageRecieved";
import MessageSent from "./MessageSent";
import { sendMessage } from "../../../store/actions/otherActions";

function ChatBox(props) {
  const { whichChatToShow, profile, From } = props;
  console.log(profile);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    let msg = [];
    if (profile.messages) {
      for (let i = 0; i < profile.messages.length; i++) {
        if (
          profile.messages[i].sentBy === whichChatToShow.ID ||
          profile.messages[i].receivedBy === whichChatToShow.ID
        ) {
          msg.push(profile.messages[i]);
        }
      }
    }
    setMessages(msg);
  }, [whichChatToShow, profile]);

  const [messageToSendFromInputBox, setMessageToSendFromInputBox] =
    useState("");

  const handleSend = (e) => {
    e.preventDefault();
    const tosend = {
      From: From,
      To: whichChatToShow.ID,
      content: messageToSendFromInputBox,
    };
    props.sendMessage(tosend);
    setMessageToSendFromInputBox("");
  };

  return (
    <div className="card" id="chatCardChild">
      <div className="card-content">
        {messages &&
          messages.map((message, index) =>
            message.type === "sent" ? (
              <MessageSent key={index} message={message} />
            ) : (
              <MessageRecieved key={index} message={message} />
            )
          )}
        <div className="input-field inline col s10">
          <input
            className="active"
            id="message"
            type="text"
            value={messageToSendFromInputBox}
            onChange={(e) => setMessageToSendFromInputBox(e.target.value)}
          />
          <label htmlFor="message">Type...</label>
        </div>
        <button
          className="btn waves-effect waves-light purple lighten-1"
          type="submit"
          name="action"
          onClick={handleSend}
        >
          Send
          <i className="material-icons right">send</i>
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    From: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (props) => {
      console.log(props);
      dispatch(sendMessage(props));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
