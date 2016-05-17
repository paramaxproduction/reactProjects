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
}, {
  id: 5,
  name: 'Raynor',
  phone: '888 533 5115'
}, {
  id: 6,
  name: 'Diablo',
  phone: '905 256 0133'
}, {
  id: 7,
  name: 'Arthas',
  phone: '000 231 8272'
}, {
  id: 8,
  name: 'JunkRat',
  phone: '450 232 7536'
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
