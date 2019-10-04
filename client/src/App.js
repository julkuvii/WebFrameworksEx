import React from 'react';
import FrontPage from './components/FrontPage';
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) 
  {
    super(props);

    this.state = {

    };
  }

  render()
  {
    return (

      <div className="App">
          <Router>
            <Route path="/" exact render={
              (routeProps) =>
              <FrontPage/>
            }>
            </Route>

            <Route path="/login" exact render={
              (routeProps) =>
              <Login/>
            }>

            </Route>

            <Route path="/register" exact render={
              (routeProps) =>
              <Register/>
            }>

            </Route>
        </Router>

      </div>
    );
  }

}

export default App;
