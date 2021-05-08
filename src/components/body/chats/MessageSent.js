import React from "react";

function MessageSent({ message }) {
  return (
    <div className="card right-align" id="messageSent">
      <div>{message.content}</div>
    </div>
  );
}

export default MessageSent;
