import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'

function HomePage() {
    return (
        <div>
            <h1>Curator Club Pro</h1>
            <nav>
                <ul>
                    <li><Link to="/new-gallery">New Gallery Form</Link></li>
                    <li><Link to="/find-artist">Find an Artist</Link></li>
                    <li><Link to="/find-artwork">Find An Artwork</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                    <li><Link to="/library">Library</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default HomePage;