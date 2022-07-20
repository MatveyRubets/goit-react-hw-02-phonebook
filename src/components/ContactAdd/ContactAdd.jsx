import React, { Component } from 'react';

class ContactAdd extends Component {
  handleSumbit = e => {
    e.preventDefault();

    console.log(e.target.elements.name.value);
  };

  handleChange = e => {
    console.log(e.target.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <br />
        <button>Add contact</button>
      </form>
    );
  }
}

export default ContactAdd;
