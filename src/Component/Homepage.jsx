import React, { Fragment, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "../Styling/Homepage.scss"
import Logo from "../Imgs/BankMisr.jpg"
function HomePage() {
    const [Convert, setConvert] = useState({

        AmountInput: "",

    })
    const [errors, setErrors] = useState({
        AmountInputErr: true,

    })
    const Converter = (e) => {
        if (e.target.name === "amountNum") {
            const valId = /^[0-9\b]+$/;
            setConvert({
                ...Convert,
                AmountInput: e.target.value
            })
            if (e.target.value.length === 0 || !(valId.test(e.target.value))) {
                setErrors({ ...errors, AmountInputErr: true })
            } else {
                setErrors({ ...errors, AmountInputErr: false })
            }


        }
    }
    return (
        <Fragment>
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
            <h4>Currency Exchanger</h4>
            <div className="currency">


                <label for="subject2" className="form-label" >Amount </label>
                <input type="text" id="subject2" className=
                    {`form-control ${errors.AmountInputErr ? "border-primary" : "border-primary"}`}
                    name="amountNum"
                    placeholder='Enter Your Amount'
                    onChange={(e) => Converter(e)}
                    value={Convert.AmountInput}
                    style={{ margin: '0px 0px 10px 25px', width: '10%' }}>

                </input>
                <p className="text-danger">
                    {errors.AmountInput ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{ width: '3%', marginLeft: '5px' }} fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /> <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /> </svg> : ' '}

                    {errors.AmountInput ? 'Enter Amount Only Number' : ''} </p>

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
                <button type="button" class="btn btn-primary" disabled={!errors.AmountInputErr  ? false : true}
                >Convert</button>
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