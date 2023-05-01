import ContactForm from 'components/ContactForm/ContactForm';
import css from './App.module.css';
import Filter from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export const App = () => {
  return (
    <div className={css.container}>
      <div className={css.section}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.section}>
        <h2 className={css.subtitle}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
