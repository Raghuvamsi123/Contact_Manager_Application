import React from "react";
import ContactCard from "./ContactCard"

const ContactList = (props) => {

    const rendercontactlist  = props.contacts.map((contacts) => {
        return(
            <ContactCard contacts = {contacts}></ContactCard>
        )
    })

    return(
        <div className="ui celled list">
            {rendercontactlist}
        </div>
    )

}

export default ContactList;