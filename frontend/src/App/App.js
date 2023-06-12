import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import MainPage from '../components/MainPage';
import SignIn from '../components/SignIn';
import NewGalleryForm from '../components/NewGalleryForm';
import FindArtist from '../components/FindArtist';
import FindArtwork from '../components/FindArtwork';
import Favorites from '../components/Favorites';
import Library from '../components/Library';

function App () {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/new-gallery" element={<NewGalleryForm/>}/>
                    <Route path="/find-artist" element={<FindArtist/>}/>
                    <Route path="/find-artwork" element={<FindArtwork/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>
                    <Route path="/library" element={<Library/>}/>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="*" element={<Navigate to="/signin" />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App;