import { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fatchContact } from 'redux/contact/contactOp';

import { Contact } from 'contactList/Contact';

import { ContactsLitsStyled } from 'contactList/ContactListStyled.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchContact());
  }, [dispatch]);

  const ren = useMemo(() => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.payload.toLowerCase());
    });
  }, [filter, contacts]);
  return (
    <ContactsLitsStyled>
      {ren.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ContactsLitsStyled>
  );
};
