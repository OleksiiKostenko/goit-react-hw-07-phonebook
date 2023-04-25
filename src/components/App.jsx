import { Form } from './Form';
import { Filter } from './Filter';
import { PhonebookList } from './PhonebookList';
import css from 'components/App.module.css';
import { Context } from './Context';

export const App = () => {
  return (
    <Context>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <Form />
        <h2 className={css.contact_title}>Contacts</h2>
        <Filter />
        <PhonebookList />
      </div>
    </Context>
  );
};
