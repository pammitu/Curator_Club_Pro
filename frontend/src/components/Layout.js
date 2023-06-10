import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Curator Club Pro</h1>
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