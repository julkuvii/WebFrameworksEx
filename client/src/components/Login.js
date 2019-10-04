import React from 'react'

export default function Login(props) {
    function Cancel(event) {
        event.preventDefault();
        props.history.goBack();
    }
    return (
        <div>
            <div className="header">
            <h1>HEADER</h1>
            </div>
            <h2>Login</h2>

            <label>Username</label>
            <input name="username"></input>
            <label>Password</label>
            <input name="password"></input>
            
            <button>Login</button>
            <button onClick= { Cancel }>Cancel</button>

        </div>
    )
}
