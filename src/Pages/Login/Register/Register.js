import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>Please Register</h1>
            <form>
                <input type="text" name='name' id='' />
                <br/>
                <input type="email" name='email' id=''/>
                <br/>
                <input type="password" name='password' id='' />
            </form>
        </div>
    );
};

export default Register;