import React from "react";

function Contact(props) {
  const { contact, setWhichChatToShow } = props;
  return (
    <div
      className="card-panel waves-effect waves-purple"
      id="contactCard"
      onClick={() => {
        setWhichChatToShow(contact);
      }}
    >
      <div className="row valign-wrapper">
        <div className="col s3 valign-wrapper">
          <img
            src="https://picsum.photos/300"
            alt=""
            className="circle responsive-img"
          />
        </div>
        <div className="col s9">
          <span className="black-text left">
            {contact.firstName} {contact.lastName}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
