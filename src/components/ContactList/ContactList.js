import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllContacts, delContact } from '../../redux/thunks';
import { ClipLoader } from 'react-spinners';

const ContactList = () => {
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const filtredContacts = () => {
    return items.filter(
      contact =>
        filter &&
        contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const renderContacts = (id, name, phone, index) => {
    return (
      <li className={css.item} key={id}>
        {index + 1}. {name}: {phone}
        <button
          className={css.btn}
          onClick={() => dispatch(delContact(id))}
          disabled={isLoading}
        >
          Delete
        </button>
      </li>
    );
  };

  return (
    <ul className={css.list}>
      {isLoading && <ClipLoader color="blue" />}
      {error && <div>{error}</div>}
      {!filter
        ? items.map(({ id, name, phone }, index) => {
            return renderContacts(id, name, phone, index);
          })
        : filtredContacts().map(({ id, name, phone }, index) => {
            return renderContacts(id, name, phone, index);
          })}
    </ul>
  );
};

export default ContactList;
