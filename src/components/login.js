import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
    const initialValues = {
        email: "",
        password: ""
    }
    const [loginValue, setLoginValue] = useState(initialValues);
    const navigate = useNavigate();

    const changeHandler = (event) => {
        setLoginValue({
            ...loginValue,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const body = {
            email: loginValue.email,
            password: loginValue.password
        }
        axios.post('https://the-mitti-api.onrender.com/login', body)
            .then((res) => { 
                console.log(res.data) 
                localStorage.setItem('token', res.data.token);
                navigate('/user-details')                
            }).catch((err) => console.log(err))
        console.log(loginValue)
        setLoginValue(initialValues)
    }
    return (
        <div className='container'>
            <div className='row'>
                <h1>Customer Login</h1>
                <div className='col-12 col-lg-6'>
                    <h2>I have an account</h2>
                    <p>Enter your email address and password to log in.</p>
                    <form onSubmit={submitHandler} >
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input className='form-control' type='email' name='email' placeholder='Email' onChange={changeHandler} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input className='form-control' type='password' name='password' placeholder='Password' onChange={changeHandler} />
                        </div>
                        <div className='mt-3'>
                            <Button variant="dark" type='submit' className='w-100 mb-3'>Login</Button>
                            <Link to={"/register"}>Forgot Your Password?</Link>
                        </div>
                    </form>
                </div>
                <div className='col-12 col-lg-6'>
                    <h2>Create a new account</h2>
                    <p>
                        <i>
                            By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.
                        </i>
                    </p>
                    <Link to={"/register"}>Create an Account</Link>
                </div>
            </div>
        </div>
    )
}
