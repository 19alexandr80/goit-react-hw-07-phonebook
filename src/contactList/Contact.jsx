import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ContactStyled, TelStyled } from 'contactList/ContactListStyled.styled';
import { deleteContact } from 'redux/contact/contactOp';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactStyled>
      <p>
        {name}: <TelStyled>{number}</TelStyled>
      </p>
      <button
        type="button"
        onClick={e => {
          dispatch(deleteContact(e.target.dataset.id));
        }}
        data-id={id}
      >
        Delete
      </button>
    </ContactStyled>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
