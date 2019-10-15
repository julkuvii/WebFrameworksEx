import React from 'react';
import styles from './LoggedIn.module.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function LoggedIn(props) {
    return (
        <div className={styles.loggedIn}>
            <div className= { styles.header } >
            <h1>HEADER</h1>
            <h2>Welcome!</h2>
            <button><Link to="/">Log Out</Link></button>
            
            </div>

            <div className={styles.cities}>
                <a href="#">Oulu</a>
                <a href="#">Helsinki</a>
                <a href="#">Jyväskylä</a>
                <a href="#">Tampere</a>
                <a href="#">Kuopio</a>
                <a href="#">Past charges</a>
            </div>

            <div className={styles.prices}>
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
