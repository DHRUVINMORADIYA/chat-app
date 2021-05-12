import React from "react";

function MessageSent({ message }) {
  return (
    <div className="card right-align">
      <div id="messageSent">{message.content}</div>
    </div>
  );
}

export default MessageSent;
