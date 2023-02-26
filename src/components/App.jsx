import { ContactForm } from './Form/PhoneBookForm';
import { ContactsList } from './Contacts/ContactList';
import { Filter } from './Filter/Filter';
import React, { useEffect, useState } from 'react';
export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('phonebook-list')) || []
  );
  const [filter, setFilter] = useState('');

  const handleChange = evt => {
    const { value, name } = evt.target;
    if (name === 'filter') {
      setFilter(value);
    }
  };
  const handleContact = (id, contactName, number) => {
    if (contacts.find(element => element.name === contactName)) {
      return alert(contactName + ' is already in contacts');
    }
    const newContacts = [
      ...contacts,
      { id: id, name: contactName, number: number },
    ];
    setContacts(newContacts);
  };
  const handleRemoveData = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  useEffect(() => {
    const phonebookListStringified = JSON.stringify(contacts);

    window.localStorage.setItem('phonebook-list', phonebookListStringified);
  }, [contacts]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleContact} />
      {contacts.length > 0 && (
        <div>
          <h2>Contacts</h2>
          <Filter onChange={handleChange} />
          <ContactsList
            data={{ contacts, filter }}
            onRemove={handleRemoveData}
          />
        </div>
      )}
    </div>
  );
};
