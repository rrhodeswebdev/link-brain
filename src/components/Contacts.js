import React from 'react';
import ContactTable from './ContactTable';
import AddContactForm from './AddContactForm';

function Contacts() {
  return(
    <div>
      <AddContactForm />
      <ContactTable />
    </div>
  )
}

export default Contacts;