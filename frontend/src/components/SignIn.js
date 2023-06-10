import React, { useState } from 'react';
import axios from 'axios';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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

    return (
        <div>
            <h1>Sign Up</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSignUp}>
                <label>Email:</label>
                <imput
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignIn;