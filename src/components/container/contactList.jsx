import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const contact = new Contact('Sebastian', 'Ramirez', 'sebastianramirez748@gmail.com', true);

console.log(contact.connected);

function ContactList() {
  return (
    <ContactComponent contact={contact} />
  )
}

export default ContactList;