import React, { Component } from 'react';

class ContactAdd extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSumbit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    this.props.addContact(name, number);
    this.clearState();
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  clearState = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSumbit}
        style={{
          padding: '15px',
          border: '1px solid black',
          width: '250px',
          gap: '15px',
        }}
      >
        <h2>Name</h2>
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <br />
        <input
          onChange={this.handleChange}
          type="tel"
          name="number"
          placeholder="Phone Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <br />
        <button>Add contact</button>
      </form>
    );
  }
}

export default ContactAdd;
