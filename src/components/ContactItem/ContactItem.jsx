import React from 'react';
import { Button, Span } from './ContactItem.styled';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <>
      <Span>{name}: </Span>
      <Span>{number}</Span>
      <Button onClick={() => deleteContact(id)}>Delete</Button>
    </>
  );
};
