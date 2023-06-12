import React, { useState } from 'react';
import axios from 'axios';
import './SignIn.css'

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningUp, setIsSigningUp] = useState(true);
    const [error, setError] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/user/register', { email, password});
            if (response.data) {
                //navigate to main page
                //you can use react-routers usehistory hook for navigation
            }
        } catch (err) {
            setError(err.message);
        }
    }

    const handleSignIn = async (e) => {
        e.preventDefault() ;
        try {
            const response = await axios.post('/user/login', {email, password});
            if (response.data) {
                //avigate to home page
            }
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className="sign-in-wrapper">
            <div className="title-container">
            {isSigningUp ? <h1>Sign Up</h1> : <h1>Sign In</h1>}
            </div>
            {error && <p>{error}</p>}
            <form className="sign-in-form" onSubmit={isSigningUp ? handleSignUp : handleSignIn}>
                <div className="input-container">
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                </div>

                <div className="input-container">
                <label>Password:</label>
                <input 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                </div>
                <div className="button-container">
                <button type="submit">{isSigningUp ? "Sign Up" : "Sign In "}</button>
                </div>
            </form>
            <button className="switch-button" onClick={ () => setIsSigningUp(!isSigningUp)}>
                {isSigningUp ? "Switch to Sign In" : "Switch to Sign Up"}
            </button>
        </div>
    )
}

export default SignIn;