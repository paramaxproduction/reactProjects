import React from 'react';
import ContactsList from './ContactsList';

let contacts = [{
  id: 1,
  name: 'Maxime',
  phone: '555 553 5325'
}, {
  id: 2,
  name: 'Henri',
  phone: '435 593 0023'
}, {
  id: 3,
  name: 'Kristelle',
  phone: '902 245 872'
}, {
  id: 4,
  name: 'Lynch',
  phone: '450 726 4443'
}]

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
