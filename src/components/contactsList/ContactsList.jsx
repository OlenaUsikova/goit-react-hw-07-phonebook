import { Contact } from '../contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter, selectFilterdData } from 'Redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilterdData);

//   const filteredContacts = () => {
//     if (filter) {
//       return contacts.filter(contact =>
//         contact.name.toLowerCase().includes(filter)
//       );
//     } else {
//       return contacts;
//     } };
  return   <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
};
