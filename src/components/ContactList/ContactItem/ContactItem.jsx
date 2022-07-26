import React from 'react';
import PropTypes from 'prop-types';
import style from '../ContactList.module.css';

const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <li>
      {name}: {number}
      <button
        className={style.btn}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
