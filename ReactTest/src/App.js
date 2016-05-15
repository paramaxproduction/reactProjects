import React from 'react';
import ContactsList from './ContactsList';

let contacts = {
  name: 'Maxime',
  phone: '555 553 5325'
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Contacts List</h1>
        <ContactsList contacts={this.props.contacts}/>
      </div>
    )
  }
}

React.render(<App contacts={contacts}/>, document.getElementById('app'));
