import { React, useState } from "react";
import AcceptInviteModal from "./AcceptInviteModal";
import Contact from "./Contact";
import InviteModal from "./InviteModal";

function Contacts(props) {
  const { contacts, setWhichChatToShow } = props;
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isAcceptInviteModalOpen, setIsAcceptInviteModalOpen] = useState(false);

  const toggleIsAcceptInviteModalOpen = () => {
    setIsAcceptInviteModalOpen(!isAcceptInviteModalOpen);
  };

  const toggleIsInviteModalOpen = () => {
    setIsInviteModalOpen(!isInviteModalOpen);
  };

  return (
    <div className="card purple lighten-5" id="ContactListCard">
      <div className="card-content">
        <span className="card-title" id="contactsHeader">
          <a
            href="#Invite"
            id="inviteButton"
            onClick={toggleIsInviteModalOpen}
            className="waves-effect waves-teal btn-flat purple lighten-1 white-text"
          >
            Invite
          </a>
          <a
            href="#AcceptInvite"
            onClick={toggleIsAcceptInviteModalOpen}
            className="waves-effect waves-teal btn-flat purple lighten-1 white-text"
          >
            Accept Invite
          </a>
          <br />
        </span>
        <InviteModal isInviteModalOpen={isInviteModalOpen} />
        <AcceptInviteModal isAcceptInviteModalOpen={isAcceptInviteModalOpen} />

        {contacts &&
          contacts.map((contact, index) => {
            return (
              <Contact
                key={index}
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
