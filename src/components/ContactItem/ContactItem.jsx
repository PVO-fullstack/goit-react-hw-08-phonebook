import React from 'react';
import { useSelector } from 'react-redux';

import { selectFilter } from 'redux/selectors';
import { Button, Li, Span } from './ContactItem.styled';
// import { deleteContact } from 'redux/operations';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactItem = () => {
  // const contactList = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  // const dispatch = useDispatch();
  const { data } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const normalaizeFilter = filter.toLowerCase();

  if (!data) {
    return;
  }
  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(normalaizeFilter)
  );

  // return <div>qqqqqq</div>;
  return visibleContacts.map(contact => (
    <Li key={contact.id}>
      <Span>{contact.name}: </Span>
      <Span>{contact.number}</Span>
      <Button onClick={() => deleteContact(contact.id)}>Delete</Button>
    </Li>
  ));
};
