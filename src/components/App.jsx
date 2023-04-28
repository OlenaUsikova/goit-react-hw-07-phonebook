import { ContactList } from './contactsList/ContactsList';
import { AddContactForm } from './addForm/AddContactsForm';
import { FindContactForm } from './findContact/FindContactForm';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectUsers } from 'Redux/selectors';
import { addContacts, setFilter } from 'Redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(selectUsers);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  
  const addNewContact = data => {
    if (contacts.find(item => item.name === data.name)) {
      return alert(`Name ${data.name} is already in contacts!`);
    }
    const newContact = {
      id: nanoid(),
      ...data,
    };
    dispatch(addContacts(newContact));
  };

  const deleteContact = id => {
    dispatch(deleteContact(id));
  };
  const onChangeFind = ev => {
    dispatch(setFilter(ev.currentTarget.value.toLowerCase()));
  };
  const filteredContacts = () => {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    } else {
      return contacts;
    }
  };
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
      <AddContactForm addContact={addNewContact} />
      <h2>Contacts</h2>
      <FindContactForm onChangeFind={onChangeFind} />
      <ContactList
        contacts={filteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
