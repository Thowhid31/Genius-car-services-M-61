import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate (`/login`)
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
    return (
        <div className='register-form'>
            <h1 style={{textAlign: 'center'}}>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='Your Namee' required/>
               
                <input type="email" name='email' id='' placeholder='Email' required/>
                
                <input type="password" name='password' id='' placeholder='Your Password' required/>
                <input type="submit" value="Register" />
            </form>
            <p>Already Ready with US? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;