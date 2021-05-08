import React from "react";
import Chat from "./chats/Chat";
import Contacts from "./contacts/Contacts";

function Body() {
  return (
    <div className="row" id="body">
      <div className="col s1"></div>
      <div className="col s3">
        <Contacts />
      </div>
      <div className="col s7">
        <Chat />
      </div>
      <div className="col s1"></div>
    </div>
  );
}

export default Body;
