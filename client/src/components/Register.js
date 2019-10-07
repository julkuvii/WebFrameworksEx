import React from 'react';
import styles from './Register.module.css';

export default function Register(props) {
    function executeRegister(event) {
        event.preventDefault();
        props.onSubmit(event);
        props.history.goBack();
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
                <label>Firstname</label><br/>
                <input name="firstname"></input><br/>
                <label>Lastname</label><br/>
                <input name="lastname"></input><br/>
                <label>Phone</label><br/>
                <input name="phone"></input><br/>
                <label>Registration Number</label><br/>
                <input name="registration"></input><br/>
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
