import React from "react";

function MessageRecieved({ message }) {
  return (
    <div className="card left-align">
      <div id="messageReceived">{message.content}</div>
    </div>
  );
}

export default MessageRecieved;
