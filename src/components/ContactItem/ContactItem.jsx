import React from 'react';
import PropTypes from 'prop-types';
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

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
