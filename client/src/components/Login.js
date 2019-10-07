import React from 'react';
import styles from './Login.module.css';

export default function Login(props) {
    function Cancel(event) {
        event.preventDefault();
        props.history.goBack();
    }
    return (
        <div className={ styles.login }>
            <div className="header">
            <h1>HEADER</h1>
            </div>

            <h2>Login</h2>
                <div className= {styles.loginForm} >
                    <label>Username</label><br/>
                    <input name="username"></input><br/>
                    <label>Password</label><br/>
                    <input name="password"></input> <br/>
                    
                    <div><button>Login</button>
                    </div>
                    <div><button onClick= { Cancel }>Cancel</button>
                    </div>
                </div>
        </div>
    )
}
