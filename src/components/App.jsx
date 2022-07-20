import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './Section/Section';
import ContactAdd from './ContactAdd/ContactAdd';
import ContactList from './ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <ContactAdd addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <ContactList contacts={contacts} />
        </Section>
      </>
    );
  }
}
