import React from 'react';
import ContactTable from './ContactTable';
import ContactsForm from './ContactsForm';

function Contacts() {
  return(
    <div>
      <ContactsForm />
      <ContactTable />
    </div>
  )
}

export default Contacts;