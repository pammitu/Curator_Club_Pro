import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'



function MainPage() {
    return (
        <div className="main-page">
            <p className="main-page__welcome">Welcome!</p>
            <nav className="main-page__nav">
                <ul className="main-page__list">
                    <li className="main-page__item">
                        <Link to="/new-gallery" className="main-page__link">New Gallery Form</Link>
                        </li>
                    <li className="main-page__item">
                        <Link to="/artwork-search" className="main-page__link">Artwork Search</Link>
                    </li>
                    <li className="main-page__item">
                        <Link to="/favorites" className="main-page__link">Favorites</Link>
                        </li>
                    <li className="main-page__item">
                        <Link to="/library" className="main-page__link">Library</Link>
                        </li>
                </ul>
            </nav>
        </div>
    );
};

export default MainPage;