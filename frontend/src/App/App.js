import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import MainPage from '../components/MainPage';
import NewGalleryForm from '../components/NewGalleryForm';
import ArtworkSearch from '../components/ArtworkSearch';
import Library from '../components/Library';

function App () {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/new-gallery" element={<NewGalleryForm/>}/>
                    <Route path="/artwork-search" element={<ArtworkSearch/>}/>
                    <Route path="/library" element={<Library/>}/>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;