import React from 'react';
import styles from './Register.module.css';
import axios from 'axios';

export default function Register(props) {
    function executeRegister(event) {
        event.preventDefault();
        props.onSubmit(event);
        axios.post('http://localhost:4000/users', {
            username: event.target.username.value,
            password: event.target.password.value
          })
          .then(function (response) {
            console.log(response);
            props.history.goBack();
          })
          .catch(function (error) {
            console.log(error);
          });


        
    }

    function Cancel(event) {
        event.preventDefault();
        props.history.goBack();
    }

    return (
        <div className= {styles.register}>
        
            <div className="header">
             <h1>HEADER</h1>
            </div>

            <div className= {styles.registerForm} >
            <h2>Register</h2>
            <form onSubmit= { executeRegister }>
                <label>Username</label><br/>
                <input name="username"></input><br/>
                <label>Password</label><br/>
                <input type="password" name="password"></input><br/>

            <input type="submit" value="Submit"/>
            <button onClick= { Cancel }>Cancel</button>
            </form>
            
        </div>
        </div>

    )
}
