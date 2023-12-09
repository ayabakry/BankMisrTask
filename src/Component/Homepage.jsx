import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "../Styling/Homepage.scss"
import Logo from "../Imgs/BankMisr.jpg"
function HomePage() {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light " >
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/">

                    <img src={Logo} alt="" width="100" height="50"/>
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
            <h4>Currency Exchanger</h4>
            <div className="currency">


                <label for="subject2" className="form-label" >Amount </label>
                <input type="text" id="subject2" className="form-control" style={{ margin: '0px 0px 10px 25px', width: '10%' }}></input>
                {/* <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                    style={{margin:'10px 0px 10px 0px', width:'10%'}}
                    >
                        <option selected>EUR</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select> */}
                <label for="subject2" className="form-label" >From  </label>
                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                    style={{ margin: '0px 0px 10px 25px', width: '10%' }}
                >
                    <option selected>EUR</option>
                    {/* <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option> */}
                </select>
                <label for="subject2" className="form-label" >To  </label>
                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                    style={{ margin: '0px 0px 10px 25px', width: '10%' }}
                >
                    <option selected>USD</option>
                    {/* <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option> */}
                </select>
                <button type="button" class="btn btn-primary">Convert</button>
                <input type="text" className="form-control" style={{ margin: '0px 0px 10px 25px', width: '10%' }}></input>

            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br><br></br>
        </Fragment>
    );
}
export default HomePage;