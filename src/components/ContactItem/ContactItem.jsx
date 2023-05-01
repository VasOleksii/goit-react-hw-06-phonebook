import { removeContact } from 'redux/contacts/contactsSlice';
import css from './ContactItem.module.css';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        className={css.button}
        onClick={() => {
          dispatch(removeContact(id));
        }}
      >
        Remove
      </button>
    </>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
export default ContactItem;
