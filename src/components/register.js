import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { UserDetails } from './userDetails'
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: ""
    }
    const [registerValue, setRegisterValue] = useState(initialValues)
    const changeHandler = (event) => {
        setRegisterValue({
            ...registerValue,
            [event.target.name]: event.target.value
        })
    }
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        const body = {
            username: registerValue.username,
            email: registerValue.email,
            password: registerValue.password
        }
        axios.post('https://the-mitti-api.onrender.com/auth/register', body).then((response) => {
            navigate("/login");
        }).catch((error) => {
            console.log(error);
        });
        setRegisterValue(initialValues)
    }
    return (
        <div className='container'>
            <div className='mx-4 mx-md-5 px-lg-5'>
                <h1 className='text-center mt-5'>Create New Customer Account</h1>
                <form onSubmit={submitHandler}>
                    <div className='form-group'>
                        <label htmlFor='username'>Username<span className='star'>*</span></label>
                        <input className='form-control' name='username' type='text' placeholder='Name' value={registerValue.username} onChange={changeHandler} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email<span className='star'>*</span></label>
                        <input className='form-control' name='email' type='email' placeholder='Email' value={registerValue.email} onChange={changeHandler} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password<span className='star'>*</span></label>
                        <input className='form-control' name='password' type='password' placeholder='Password' value={registerValue.password} onChange={changeHandler} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='confirmPassword'>Confirm Password<span className='star'>*</span></label>
                        <input className='form-control' name='confirmPassword' type='password' placeholder='Confirm password' value={registerValue.confirmPassword} onChange={changeHandler} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='phone'>Phone<span className='star'>*</span></label>
                        <input className='form-control' name='phone' type='number' placeholder='Phone' value={registerValue.phone} onChange={changeHandler} />
                    </div>
                    <Button type='submit' variant="dark" className='w-100 mt-4 mb-2'>Register</Button>
                    <Link to={"/login"}>Login</Link>
                </form>
            </div>
        </div>
    )
}
