import React, {useState} from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/contactForm';

const contact1 = new Contact('Sebastian', 'Ramirez', 'sebastianramirez748@gmail.com', true);
const contact2 = new Contact('Sebastian', 'Ramirez', 'sebastianramirez748@gmail.com', false);
const contact3 = new Contact('Sebastian', 'Ramirez', 'sebastianramirez748@gmail.com', true);
const contact4 = new Contact('Sebastian', 'Ramirez', 'sebastianramirez748@gmail.com', true);





function ContactList() {

  const [contacts, setContacts] = useState([contact1, contact2, contact3, contact4]);
  

  const handleStateConecction = (contact) => {
    const indexContact = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[indexContact].connected = !tempContacts[indexContact].connected; 

    setContacts(tempContacts);
  }

  const addContact = (contact) => {
    const tempContacts = [...contacts];
    tempContacts.push(contact); 
    setContacts(tempContacts);
  }

  const deleteContact = (contact) => {
    const indexContact = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(indexContact, 1);

    setContacts(tempContacts);

  }



  return (

    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>connection status</th>
            <th>Change connection</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map((contact, index) => {
              return(
              <ContactComponent
                key={index}
                contact={contact} 
                handleConecction={() => handleStateConecction(contact)}
                deleteContact={deleteContact}

              />

              )
            })
          }
        </tbody>
      </table>

      <ContactForm addContact={addContact} />

    </>     
  )
}

export default ContactList;