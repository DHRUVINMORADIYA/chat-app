import React from "react";

function MessageRecieved({ message }) {
  return (
    <div className="card left-align" id="messageReceived">
      {message.content}
    </div>
  );
}

export default MessageRecieved;
