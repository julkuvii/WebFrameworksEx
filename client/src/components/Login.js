import React from 'react';
import styles from './Login.module.css';
import Auth from './Auth';

export default function Login(props) {
    function Cancel(event) {
        event.preventDefault();
        props.history.goBack();
    }

    function login(event) {
        event.preventDefault();
        Auth.authenticate(event.target['username'].value, event.target['password'].value)
            .then(result =>
                {
                    props.loginSuccess();
                    props.history.push(props.redirectPathOnSuccess);
                })
                .catch(() => {
                    props.loginFail();
                })
    }

    return (
        <div className={ styles.login }>
            <div className="header">
            <h1>HEADER</h1>
            </div>

            <h2>Login</h2>
            <form onSubmit = { login }>
                <div className= {styles.loginForm} >
                    <label>Username</label><br/>
                    <input name="username"></input><br/>
                    <label>Password</label><br/>
                    <input name="password"></input> <br/>
                    
                    <div><button type="submit">Login</button>
                    </div>
                    <div><button onClick= { Cancel }>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
