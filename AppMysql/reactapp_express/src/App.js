import React, {Component} from 'react';

class App extends Component {
  state = {
    users: []
  }
  componentDidMount(){
    this.getUsers();
  }
  getUsers = _ =>{
    fetch('http://localhost:7000/api/')
    .then(res => res.json())
    .then(res => this.setState({ users: res.data }))
    .catch(err => console.error(err))
  }
  renderUsers = ({id, name}) => <div key={id}>{name}</div>
  render() {
    const { users } = this.state;

    return(
      <div className="App">
        {users.map(this.renderUsers)}
      </div>
   ) 
  }
}

export default App;
