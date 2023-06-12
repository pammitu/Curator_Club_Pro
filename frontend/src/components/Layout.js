import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <Link to="/">
                    <h1>CURATOR CLUB PRO</h1>
                </Link>
            </header>

            <main>
                {children}
            </main>

            <footer>
                <Link to="/signin">Sign Out</Link>
            </footer>
        </div>
    );
};

export default Layout;