import { FormAddUser } from 'formPhoneBook/FormAddUser';
import { Filter } from 'contactList/Filter';
import { ContactList } from 'contactList/ContactList';
import { AppStyled } from 'AppStyled.styled';

export const App = () => {
  return (
    <AppStyled>
      <h1>Phonebook</h1>
      <FormAddUser />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </AppStyled>
  );
};
