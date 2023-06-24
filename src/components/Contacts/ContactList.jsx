import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, Item, Name, Number, Message } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredList } from 'redux/selectors';
import { fetchContacts, deleteContact } from 'services/api';

//
const ContactList = () => {
  const filteredList = useSelector(selectFilteredList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  //
  const removeContact = e => {
    const idx = e.currentTarget.dataset.id;
    dispatch(deleteContact(idx));
  };

  //
  return (
    <List>
      {filteredList.length !== 0 ? (
        filteredList.map(({ id, name, number }) => (
          <Item key={id}>
            <Name>{name}:</Name>
            <Number>{number}</Number>
            <button data-id={id} onClick={removeContact}>
              Delete
            </button>
          </Item>
        ))
      ) : (
        <Message>Your contact list is empty</Message>
      )}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export { ContactList };
