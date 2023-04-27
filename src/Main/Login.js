import { useState } from 'react';

import './Login.css'
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        const entry = { username: username, password: password };
        console.log(entry);
        setUsername('');
        setPassword('');
    }

    return (

        <div className='centered-div'>
            <form action='' onSubmit={handleSubmit}>
                <fieldset>
                    <legend className='formCentre'>
                        Login
                    </legend>
                <label htmlFor='username'>
                    Usrname:
                </label>
                <input type='text'
                 id='username'
                 value={username} 
                 onChange={(e) => { setUsername(e.target.value) }} 
                required
                />
                <label htmlFor='password'>
                    Password:
                </label>
                <input 
                type='password' 
                id='password' 
                value={password} 
                onChange={(e) => { setPassword(e.target.value) }} 
                required
                />
                <button type='submit' className='formCentre submit-btn'>
                    Login
                </button>
                
                </fieldset>
                
            </form>
        </div>

    )



}

export default Login;

