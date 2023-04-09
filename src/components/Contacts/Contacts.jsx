import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactItem } from '../ContactItem/ContactItem';
import { Conteiner, Header, Title } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { selectIsRefresh } from 'redux/auth/auth-selectors';

export const Contacts = () => {
  const isRefresh = useSelector(selectIsRefresh);
  const { data } = useGetContactsQuery();

  return isRefresh ? (
    'Contacts is refresh...'
  ) : (
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
