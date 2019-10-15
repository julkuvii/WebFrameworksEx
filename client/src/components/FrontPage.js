import React from 'react';
import styles from './FrontPage.module.css';
import { Link } from "react-router-dom";

export default function FrontPage(props) {
    return (
        <div className={styles.frontpage}>
            <div className={styles.header}>
            <h1>HEADER</h1>

                <div>
                <Link to="/login"><button>Login</button></Link> 
                </div>

                <div>
                <Link to="/register"><button>Register</button></Link>
                </div>
            </div>


            <div className={styles.cities}>
                <a href="#">Oulu</a>
                <a href="#">Helsinki</a>
                <a href="#">Jyväskylä</a>
                <a href="#">Tampere</a>
                <a href="#">Kuopio</a>
            </div>

            <div className={styles.prices}>
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
