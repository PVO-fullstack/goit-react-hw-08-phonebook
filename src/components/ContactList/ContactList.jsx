import React from 'react';
import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Ul, Li } from './ContactList.styled';
import { selectFilter } from 'redux/contacts/selectors';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const { data } = useGetContactsQuery();

  const normalaizeFilter = filter.toLowerCase();

  if (!data) {
    return;
  }
  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(normalaizeFilter)
  );

  return (
    <Ul>
      {visibleContacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <Li key={id}>
            <ContactItem id={id} name={name} number={number} />
          </Li>
        );
      })}
    </Ul>
  );
};
