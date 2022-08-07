import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


function ContactForm ({addContact}) {


  const refName = useRef('');
  const refLastName = useRef('');
  const refEmail = useRef('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = new Contact(
      refName.current.value,
      refLastName.current.vlaue,
      refEmail.current.value,
      false
    );
    addContact(contact);
  }

  return (
    
    <form onSubmit={handleSubmit}>
        <input ref={refName} type="text" placeholder='Name' />
        <input ref={refLastName} type="text" placeholder='Last Name'/>
        <input ref={refEmail} type="text" placeholder='Email' />
        <input type="submit" value="Agregar" />
    </form>
  )
}

ContactForm.propTypes = {}

export default ContactForm;