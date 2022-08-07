import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Contact} from '../../models/contact.class';




function ContactComponent({contact, handleConecction, deleteContact}) {

  
  return (
   <>
    <tr>      
      <td>{contact.name}</td>
      <td>{contact.lastName}</td>
      <td>{contact.email}</td>
      <td>{contact.connected ? 'Conectado' : 'No Conectado'}</td>
      <td>
        <button onClick={handleConecction}>Cambiar estado de conectado</button>
      </td>
      <td>
        <button onClick={() => deleteContact(contact)}>X</button>
      </td>
    </tr>
   </>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
}

export default ContactComponent;