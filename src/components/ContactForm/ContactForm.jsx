import React from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Label, Form, Input, Button } from './ContactForm.styled';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { useAddContactMutation } from 'redux/contacts/contactsSlice';

export const ContactForm = () => {
  const { data: contacts } = useGetContactsQuery();

  const [add] = useAddContactMutation();
  if (!contacts) {
    return;
  }
  const contactsName = contacts.map(contact => contact.name);

  const handleSubmit = e => {
    e.preventDefault();
    const {
      elements: { name, number },
    } = e.currentTarget;
    const reset = () => e.currentTarget.reset();
    if (contactsName.includes(name.value)) {
      Notify.warning(`${name.value} is already in contacts`);
      reset();
      return;
    }
    add({ name: name.value, number: number.value });
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};
