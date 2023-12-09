import React, { Fragment, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "../Styling/Homepage.scss"
import Logo from "../Imgs/BankMisr.jpg"
import axios from "axios";



function Details() {
    const [Convert, setConvert] = useState({

        AmountInput: 1,

    })
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [conversionRate, setConversionRate] = useState(null);
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await axios.get(
                    'https://api.exchangerate-api.com/v4/latest/USD'
                );
                const currenciesList = Object.keys(response.data.rates);
                setCurrencies(currenciesList);
                // Set default currencies for the first render
                setFromCurrency(currenciesList[0]);
                setToCurrency(currenciesList[1]);
            } catch (error) {
                console.error('Error fetching currencies:', error);
            }
        };

        fetchCurrencies();
    }, []);
    useEffect(() => {
        const fetchConversionRate = async () => {
            try {
                const response = await axios.get(
                    `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
                );
                const rate = response.data.rates[toCurrency];
                setConversionRate(rate);
            } catch (error) {
                console.error('Error fetching conversion rate:', error);
            }
        };

        fetchConversionRate();
    }, [fromCurrency, toCurrency]);


    useEffect(() => {
        if (conversionRate !== null) {
            const converted = Convert * conversionRate;
            setConvertedAmount(converted.toFixed(2));
        }
    }, [Convert, conversionRate]);
    const handleAmountChange = (e) => {
        setConvert(e.target.value);
    };

    const handleFromCurrencyChange = (e) => {
        setFromCurrency(e.target.value);
    };

    const handleToCurrencyChange = (e) => {
        setToCurrency(e.target.value);
    };


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
           
            <h4>Currency Exchanger</h4>
            <div className="currency">


                <label for="subject2" className="form-label" >Amount </label>
                <input type="number" id="subject2" className=
                    {`form-control ${errors.AmountInputErr ? "border-primary" : "border-primary"}`}
                    name="amountNum"
                    placeholder='Enter Your Amount'
                    value={Convert} onChange={handleAmountChange}
                    style={{
                        margin: '0px 0px 10px 25px', width: '50%',
                        height: '45px',
                    }}>

                </input>
                <p className="text-danger">
                    {errors.AmountInput ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{ width: '3%', marginLeft: '5px' }} fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /> <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /> </svg> : ' '}

                    {errors.AmountInput ? 'Enter Amount Only Number' : ''} </p>

                <label for="subject2" className="form-label" >From  </label>
                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={fromCurrency} onChange={handleFromCurrencyChange}  style={{ margin: '0px 0px 10px 25px', width: '50%' }}>
                    {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
                <label for="subject2" className="form-label" >To  </label>
                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={toCurrency} onChange={handleToCurrencyChange}       style={{ margin: '0px 0px 10px 25px', width: '50%' }}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>

                {/* <button type="button" class="btn btn-primary" disabled={!errors.AmountInputErr  ? false : true}
                >Convert</button> */}

                <label className="form-control" style={{ margin: '0px 0px 10px 25px', width: '50%', border: '1px solid blue' }}>{`${Convert} ${fromCurrency} = ${convertedAmount} ${toCurrency}`}</label>
              
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text"> historical data </p>
                        </div>
                    </div>
                </div>
</div>
            <br></br><br></br>
        </Fragment>
    );
}
export default Details;