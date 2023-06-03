import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(registerValue)
        const body = {
            username: registerValue.username,
            email: registerValue.email,
            password: registerValue.password
        }
        axios.post('http://the-mitti-api.onrender.com/', body).then(function (response) {
            console.log(response);
        }).catch(function (error) {
                console.log(error);
        });
        setRegisterValue(initialValues)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input className='form-control' name='username' type='text' placeholder='Name' value={registerValue.username} onChange={changeHandler} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input className='form-control' name='email' type='email' placeholder='Email' value={registerValue.email} onChange={changeHandler} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input className='form-control' name='password' type='password' placeholder='Password' value={registerValue.password} onChange={changeHandler} />
                </div>
                <div className='form-group'>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input className='form-control' name='confirmPassword' type='password' placeholder='Confirm password' value={registerValue.confirmPassword} onChange={changeHandler} />
                </div>
                <div className='form-group'>
                    <label htmlFor='phone'>Phone</label>
                    <input className='form-control' name='phone' type='number' placeholder='Phone' value={registerValue.phone} onChange={changeHandler} />
                </div>
                <Button type='submit'>Register</Button>
                <Link to={"/login"}>Login</Link>
            </form>
        </div>
    )
}
