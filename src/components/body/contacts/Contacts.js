import React from "react";
import Contact from "./Contact";

function Contacts(props) {
  const { contacts, setWhichChatToShow } = props;
  return (
    <div className="card purple lighten-5" id="ContactListCard">
      <div className="card-content">
        <span className="card-title" id="contactsHeader">
          Contacts
        </span>
        {contacts &&
          contacts.map((contact) => {
            return (
              <Contact
                contact={contact}
                setWhichChatToShow={setWhichChatToShow}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Contacts;
