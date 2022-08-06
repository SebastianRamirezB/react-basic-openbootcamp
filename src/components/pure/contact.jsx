import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Contact} from '../../models/contact.class';




function ContactComponent({contact}) {


  const [state, setState] = useState(contact.connected);
  contact.connected = state;

  const handleState = () => {
    setState(!state);
  }

  
  return (
   <>
    <h2>{contact.name}</h2>
    <h2>{contact.lastName}</h2>
    <h2>{contact.email}</h2>
    <h2>{contact.connected ? 'Conectado' : 'No Conectado'}</h2>

    <button onClick={handleState}>Cambiar estado de conectado</button>
   </>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
}

export default ContactComponent;