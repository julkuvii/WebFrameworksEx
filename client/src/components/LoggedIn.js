import React from 'react';
import styles from './LoggedIn.module.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function LoggedIn(props) {
    return (
        <div>
            <div className= { styles.LoggedIn } >
            <h1>HEADER</h1>
            <button><Link to="/">Log Out</Link></button>
            <button>Past Charges</button>
            </div>

            <div className="cities">
                <p>This shows when logged in</p>
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

            <div>

            </div>
        </div>
    )
}
