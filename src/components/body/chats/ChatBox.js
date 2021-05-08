import React from "react";
import MessageRecieved from "./MessageRecieved";
import MessageSent from "./MessageSent";

const initialData = [
  {
    type: "sent",
    content: "hello user2",
    sentBy: "user1",
    receivedBy: "user2",
    timeStamp: new Date(),
  },
  {
    type: "received",
    content: "hello user1",
    sentBy: "user2",
    receivedBy: "user1",
    timeStamp: new Date(),
  },
  {
    type: "sent",
    content: "hello user2",
    sentBy: "user1",
    receivedBy: "user2",
    timeStamp: new Date(),
  },
  {
    type: "received",
    content: "hello user1",
    sentBy: "user2",
    receivedBy: "user1",
    timeStamp: new Date(),
  },
  {
    type: "sent",
    content: "hello user2",
    sentBy: "user1",
    receivedBy: "user2",
    timeStamp: new Date(),
  },
  {
    type: "received",
    content: "hello user1",
    sentBy: "user2",
    receivedBy: "user1",
    timeStamp: new Date(),
  },
  {
    type: "sent",
    content: "hello user2",
    sentBy: "user1",
    receivedBy: "user2",
    timeStamp: new Date(),
  },
  {
    type: "received",
    content: "hello user1",
    sentBy: "user2",
    receivedBy: "user1",
    timeStamp: new Date(),
  },
  {
    type: "sent",
    content: "hello user2",
    sentBy: "user1",
    receivedBy: "user2",
    timeStamp: new Date(),
  },
  {
    type: "received",
    content: "hello user1",
    sentBy: "user2",
    receivedBy: "user1",
    timeStamp: new Date(),
  },
  {
    type: "sent",
    content: "hello user2",
    sentBy: "user1",
    receivedBy: "user2",
    timeStamp: new Date(),
  },
  {
    type: "received",
    content: "hello user1",
    sentBy: "user2",
    receivedBy: "user1",
    timeStamp: new Date(),
  },
  {
    type: "sent",
    content: "hello user2",
    sentBy: "user1",
    receivedBy: "user2",
    timeStamp: new Date(),
  },
  {
    type: "received",
    content: "hello user1",
    sentBy: "user2",
    receivedBy: "user1",
    timeStamp: new Date(),
  },
  {
    type: "sent",
    content: "hello user2",
    sentBy: "user1",
    receivedBy: "user2",
    timeStamp: new Date(),
  },
  {
    type: "received",
    content: "hello user1",
    sentBy: "user2",
    receivedBy: "user1",
    timeStamp: new Date(),
  },
  {
    type: "sent",
    content: "hello user2",
    sentBy: "user1",
    receivedBy: "user2",
    timeStamp: new Date(),
  },
  {
    type: "received",
    content: "hello user1",
    sentBy: "user2",
    receivedBy: "user1",
    timeStamp: new Date(),
  },
  {
    type: "sent",
    content: "hello user2",
    sentBy: "user1",
    receivedBy: "user2",
    timeStamp: new Date(),
  },
  {
    type: "received",
    content: "hello user1",
    sentBy: "user2",
    receivedBy: "user1",
    timeStamp: new Date(),
  },
  {
    type: "sent",
    content: "hello user2",
    sentBy: "user1",
    receivedBy: "user2",
    timeStamp: new Date(),
  },
  {
    type: "received",
    content: "hello user1",
    sentBy: "user2",
    receivedBy: "user1",
    timeStamp: new Date(),
  },
  {
    type: "sent",
    content: "hello user2",
    sentBy: "user1",
    receivedBy: "user2",
    timeStamp: new Date(),
  },
  {
    type: "received",
    content: "hello user1",
    sentBy: "user2",
    receivedBy: "user1",
    timeStamp: new Date(),
  },
  {
    type: "sent",
    content: "hello user2",
    sentBy: "user1",
    receivedBy: "user2",
    timeStamp: new Date(),
  },
  {
    type: "received",
    content: "hello user1",
    sentBy: "user2",
    receivedBy: "user1",
    timeStamp: new Date(),
  },
  {
    type: "sent",
    content: "hello user2",
    sentBy: "user1",
    receivedBy: "user2",
    timeStamp: new Date(),
  },
  {
    type: "received",
    content: "hello user1",
    sentBy: "user2",
    receivedBy: "user1",
    timeStamp: new Date(),
  },
];

function ChatBox() {
  return (
    <div className="card" id="chatCardChild">
      <div className="card-content">
        {initialData &&
          initialData.map((message, index) =>
            message.type === "sent" ? (
              <MessageSent key={index} message={message} />
            ) : (
              <MessageRecieved key={index} message={message} />
            )
          )}
        <div class="input-field inline col s10">
          <input className="active" id="message" type="text" class="validate" />
          <label for="message">Type...</label>
        </div>
        <button
          class="btn waves-effect waves-light purple lighten-1"
          type="submit"
          name="action"
        >
          Send
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
