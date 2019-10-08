import React from 'react';
import FrontPage from './components/FrontPage';
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

class App extends React.Component {
  constructor(props) 
  {
    super(props);

    this.state = {
      users: [],
      cities: [],
      registerForm: false,

      inputForm: { firstname:"", lastname:"", phone:"", registration:"", username:"", password:""}
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      inputForm:
      {
        firstname: event.target.firstname.value,
        lastname: event.target.lastname.value,
        phone: event.target.phone.value,
        registration: event.target.registration.value,
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
        </Router>

      </div>
    );
  }

}

export default App;
