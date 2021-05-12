import React from "react";

function MessageSent({ message }) {
  return (
    <div>
      <div className="card" id="messageSentCard">
        <div id="messageSent">{message.content}</div>
      </div>
    </div>
  );
}

export default MessageSent;
