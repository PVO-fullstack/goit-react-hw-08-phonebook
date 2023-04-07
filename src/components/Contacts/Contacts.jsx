import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactItem } from '../ContactItem/ContactItem';
import { Conteiner, Header, Title } from './Contacts.styled';
// import { selectContacts } from 'redux/selectors';
// import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsSlice';

export const Contacts = () => {
  // const token = useSelector(state => state.auth.token);

  const { data } = useGetContactsQuery();

  return (
    <Conteiner>
      <div>
        <Header>Phonebook</Header>
        <ContactForm />
      </div>
      <div>
        {data && data.length > 0 && (
          <>
            <Filter />
            <Title>Contacts</Title>
          </>
        )}
        <ContactList>
          <ContactItem />
        </ContactList>
      </div>
    </Conteiner>
  );
};
