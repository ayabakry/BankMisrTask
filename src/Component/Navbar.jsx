import React, { Fragment, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "../Styling/Homepage.scss"
import Logo from "../Imgs/BankMisr.jpg"
import axios from "axios";

function Nabvar () {
    return(
        <nav className="navbar navbar-expand-lg navbar-light " >
        <div className="container-fluid">

            <Link className="navbar-brand" to="/">

                <img src={Logo} alt="" width="100" height="50" />
            </Link>
            <form className="d-flex">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link " to="/">EUR-USD Details</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">EUR-GBP Details</Link>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    </nav>
    );
}
export default Nabvar