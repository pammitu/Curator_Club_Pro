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
            const response = await axios.post('/api/user/register', { email, password});
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
            const response = await axios.post('/api/user/login', {email, password});
            if (response.data) {
                //avigate to home page
            }
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className="sign-in-wrapper">
            
            <h1 className="sign-in-header">{isSigningUp ? 'Sign Up' : 'Sign In'}</h1>
            
            {error && <p>{error}</p>}
            <form className="sign-in-form" onSubmit={isSigningUp ? handleSignUp : handleSignIn}>
                <div className="input-container">
                <label className="input-label">Email:</label>
                <input 
                    className="input-field"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                </div>

                <div className="input-container">
                <label className="input-label">Password:</label>
                <input
                    className="input-field"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                </div>
                <div className="button-container">
                <button className="submit-button" type="submit">{isSigningUp ? "Sign Up" : "Sign In "}</button>
                </div>
            </form>
            <button className="switch-button" onClick={ () => setIsSigningUp(!isSigningUp)}>
                {isSigningUp ? "Switch to Sign In" : "Switch to Sign Up"}
            </button>
        </div>
    )
}

export default SignIn;