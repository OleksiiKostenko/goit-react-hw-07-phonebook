import css from 'components/PhonebookList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { deleteContact } from 'redux/operations';

export const PhonebookList = () => {
  const distpatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const normalizedFilter = filter.toLowerCase();
  const filteredList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={css.list_item}>
      {filteredList.map(({ id, name, phone }) => (
        <li className={css.list_el} key={id}>
          <p className={css.list_title}>
            {name}:{phone}
          </p>
          <button
            type="button"
            className={css.list_btn}
            onClick={() => distpatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
