import React from 'react';

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
        <div className="form">
            <div className="header">
             <h1>HEADER</h1>
            </div>

            <h2>Register</h2>
            <form onSubmit= { executeRegister }>
                <label>Firstname</label>
                <input name="firstname"></input>
                <label>Lastname</label>
                <input name="lastname"></input>
                <label>Phone</label>
                <input name="phone"></input>
                <label>Registration Number</label>
                <input name="registration"></input>
                <label>Username</label>
                <input name="username"></input>
                <label>Password</label>
                <input type="password" name="password"></input>

            <input type="submit" value="Submit"/>
            <button onClick= { Cancel }>Cancel</button>
            </form>
            
        </div>
    )
}
