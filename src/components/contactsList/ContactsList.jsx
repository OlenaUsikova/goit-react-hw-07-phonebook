import { Contact } from '../contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilterdData } from 'Redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilterdData);
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
