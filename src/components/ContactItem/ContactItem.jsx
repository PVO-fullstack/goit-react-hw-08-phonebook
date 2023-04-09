import React from 'react';
import { useSelector } from 'react-redux';

import { selectFilter } from 'redux/contacts/selectors';
import { Button, Li, Span } from './ContactItem.styled';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';

export const ContactItem = () => {
  const filter = useSelector(selectFilter);
  const { data } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const normalaizeFilter = filter.toLowerCase();

  if (!data) {
    return;
  }
  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(normalaizeFilter)
  );

  return visibleContacts.map(contact => (
    <Li key={contact.id}>
      <Span>{contact.name}: </Span>
      <Span>{contact.number}</Span>
      <Button onClick={() => deleteContact(contact.id)}>Delete</Button>
    </Li>
  ));
};
