import React from 'react';
import styles from './FrontPage.module.css';
import { Link } from "react-router-dom";

export default function FrontPage(props) {
    return (
        <div className={styles.frontpage}>
            <div className="header">
            <h1>HEADER</h1>

                <div>
                <Link to="/login"><button>Login</button></Link> 
                </div>

                <div>
                <Link to="/register"><button>Register</button></Link>
                </div>
            </div>

            <div className="Client">
                { props.inputForm.firstname } <br/>
                { props.inputForm.lastname } <br/>
                { props.inputForm.phone } <br/>
                { props.inputForm.registration } <br/>
                { props.inputForm.username } <br/>
                { props.inputForm.password } <br/>


            </div>

            <div className="cities">
            <ul>
                <li>Cities</li>
            </ul>
            </div>

            <div className="prices">
                <h2>Prices</h2>
                <ul>
                    <li>FREE 22kW charger with Type 2 Connectors</li>
                    <li>(0.20 e/min) 22kW charger with Type 2 Connectors</li>
                    <li>(0.18 e/kWh) 50-150kW with CCS Connectors</li>           
                </ul>
            </div>
            
        </div>
    )
}