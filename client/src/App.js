import React, { Component } from 'react';
import FrontPage from './components/FrontPage';
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import axios from 'axios';
import LoggedIn from './components/LoggedIn';

export default class App extends Component {
  constructor(props) 
  {
    super(props);

    this.state = {
      users: [],
      cities: [],
      registerForm: false,
      isAuthenticated: false,

      inputForm: { username:"", password:""}
    };
  }

  onLogin = () => {
    this.setState({ isAuthenticated: true })
  }

  onLogout = () => {
    this.setState({ isAuthenticated : false})
  }
  onLoginFail = () => {
    this.setState({ isAuthenticated: false });
    console.log("login failed");
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      inputForm:
      {
        username: event.target.username.value,
        password: event.target.password.value
      },
    })
  }

  componentDidMount = () =>{
    axios.get('http://localhost:4000/users').then(result => {
      this.setState({ users: result.data });
    })
    .catch(error => {
      console.error(error);
      this.setState({ networkError: true })
    })
  }

  render()
  {
    return (

      <div className="App">
          <Router>
            <Route path="/" exact render={
              (routeProps) =>
              <FrontPage
              inputForm= { this.state.inputForm }
              registerCancel={ this.registerCancel }
              registrate= { this.registrate }
              
              />
            }>
            </Route>

            <Route path="/login" exact render={
              (routeProps) =>
              <Login
              onCancel={ this.registerCancel }
              loginSuccess = { this.onLogin }
              loginFail = { this.onLoginFail }
              userInfo = { this.state.userInfo }
              redirectPathOnSuccess="/loggedIn"
              { ...routeProps }

              />
            }>

            </Route>

            <Route path="/register" exact render={
              (routeProps) =>
              <Register
              onCancel={ this.registerCancel }
              onSubmit={ this.handleSubmit }
              { ...routeProps }
              />
            }>

            </Route>

            <ProtectedRoute isAuthenticated= { this.state.isAuthenticated } path="/loggedIn" exact render =
            {
              (routeProps) => 
              <LoggedIn
              logoutSuccess = { this.onLogout }

                />
            }>
            </ProtectedRoute>

        </Router>

      </div>
    );
  }

}

