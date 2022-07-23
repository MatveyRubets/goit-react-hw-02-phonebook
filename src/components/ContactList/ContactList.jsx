import React from 'react';
import style from './ContactList.module.css';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            deleteContact={removeContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
};

export default ContactList;
