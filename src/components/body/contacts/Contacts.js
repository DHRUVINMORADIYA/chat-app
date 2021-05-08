import React from "react";
import Contact from "./Contact";

function Contacts() {
  return (
    <div className="card purple lighten-5" id="ContactListCard">
      <div className="card-content">
        <span className="card-title" id="contactsHeader">
          Contacts
        </span>
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
}

export default Contacts;
