import { ContactList } from './contactsList/ContactsList';
import { AddContactForm } from './addForm/AddContactsForm';
import { FindContactForm } from './findContact/FindContactForm';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
 
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <AddContactForm />
      <h2>Contacts</h2>
      <FindContactForm/>
      <ContactList/>
    </div>
  );
};
