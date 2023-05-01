import css from './App.module.css';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { useState, useEffect } from 'react';

export const App = () => {
  const initialContacts = () => {
    const storedContacts = localStorage.getItem('contacts');
    const contacts = storedContacts
      ? JSON.parse(storedContacts)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
    return contacts;
  };

  const [contacts, setContacts] = useState(initialContacts);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(name + ' is already in contacts')
      : setContacts([...contacts, { name, number, id: nanoid() }]);
  };

  const removeContact = id => {
    return setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilterValue = filter.toLowerCase();
    const filterdContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterValue)
    );
    return filterdContacts;
  };

  return (
    <div className={css.container}>
      <div className={css.section}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
      </div>
      <div className={css.section}>
        <h2 className={css.subtitle}>Contacts</h2>
        <Filter onChange={handleFilter} value={filter} />
        <ContactList
          contacts={getFilteredContacts()}
          onRemove={removeContact}
        />
      </div>
    </div>
  );
};

export default App;
