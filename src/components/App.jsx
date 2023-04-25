import { Form } from './Form';
import { Filter } from './Filter';
import { PhonebookList } from './PhonebookList';
import css from 'components/App.module.css';
import { Context } from './Context';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getIsLoading } from 'redux/contactsSlice';

export const App = () => {
  const distpatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    distpatch(fetchContacts());
  }, [distpatch]);

  return (
    <Context>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <Form />
        <h2 className={css.contact_title}>Contacts</h2>
        {contacts.length > 1 && <Filter />}
        {isLoading && !error && (
          <h6 className={css.contact_title}>Loading...</h6>
        )}
        {contacts.length > 0 ? (
          <PhonebookList />
        ) : (
          <h3 className={css.contact_title}>Add new contact in PhoneBook</h3>
        )}
      </div>
    </Context>
  );
};
