import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'

function MainPage() {
  return (
    <div className="main-page">
      
      <nav className="main-page__nav">
        <ul className="main-page__list">
        <li className="main-page__item">
                <Link to="/new-gallery" className="main-page__link">
                    <img src="/van.jpeg" alt="Image 1" className="main-page__image" />
                    <span className="main-page__link-text">New Gallery Form</span>
                </Link>
                </li>
                <li className="main-page__item">
                <Link to="/artwork-search" className="main-page__link">
                    <img src="/paul.jpeg" alt="Image 2" className="main-page__image" />
                    <span className="main-page__link-text">Artwork Search</span>
                </Link>
                </li>
                <li className="main-page__item">
                <Link to="/library" className="main-page__link">
                    <img src="/manet.jpeg" alt="Image 3" className="main-page__image" />
                    <span className="main-page__link-text">Library</span>
                </Link>
                </li>

        </ul>
      </nav>
    </div>
  );
};

export default MainPage;
