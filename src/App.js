import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import logo from './logo.svg'
import './App.css'
import Login from './components/login'
import Register from './components/register'
import Edit from './components/edit'
import Views from './components/views'

function App() {
  return (
    <Router>
      <div className="container-fluid m-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to={'/'} className="navbar-brand">EteYelo Brand</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav">
              <li className="nav-item">
                <Link to={'/login'} className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to={'/register'} className="nav-link">Registration</Link>
              </li>
              <li className="nav-item">
                <Link to={'/views'} className="nav-link">List of users</Link>
              </li>
            </ul>
          </div>
        </nav>
        <h2 className="display-4 text-success text-center">Welcome to test jean-pierre14</h2>

        <Switch>
          <Route exact path="/register" component={ Register }/>
          <Route exact path="/edit/:id" component={ Edit }/>
          <Route path="/login" component={ Login }/> 
          <Route path="/views" component={ Views }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
