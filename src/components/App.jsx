import React, { Component } from 'react';

import Section from './Section/Section';
import ContactAdd from './ContactAdd/ContactAdd';
import ContactList from './ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactAdd />
        </Section>
        <Section title="Contacts">
          <ContactList />
        </Section>
      </>
    );
  }
}
