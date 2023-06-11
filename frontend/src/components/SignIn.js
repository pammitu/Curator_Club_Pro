import React, { useState } from 'react';
import axios from 'axios';

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
                //navigate to home page
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
        <div>
            {isSigningUp ? <h1>Sign Up</h1> : <h1>Sign In</h1>}
            {error && <p>{error}</p>}
            <form onSubmit={isSigningUp ? handleSignUp : handleSignIn}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label>Password:</label>
                <input 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">{isSigningUp ? "Sign Up" : "Sign In "}</button>
            </form>
            <button onClick={ () => setIsSigningUp(!isSigningUp)}>
                {isSigningUp ? "Switch to Sign In" : "Switch to Sign Up"}
            </button>
        </div>
    )
}

export default SignIn;