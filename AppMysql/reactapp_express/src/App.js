import React, {Component} from 'react';

class App extends Component {
  state = {
    users: []
  }
  componentDidMount(){
    this.getUsers();
  }
  getUsers = _ =>{
    fetch('api/')
      .then(res => res.json())
      .then(users => this.setState({users}, () => console.log('Users fetch', users)));
  }
  renderUsers = ({id, name}) => <div key={id}>{name}</div>
  render() {
    const { users } = this.state;

    return(
      <div className="App">
        <h3>Users</h3>
        <ul>
          {this.state.users.map(user => 
            <li key={user.id}>{user.name}</li>
          )}
        </ul>
      </div>
   ) 
  }
}

export default App;
