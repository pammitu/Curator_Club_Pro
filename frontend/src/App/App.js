import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import NewGalleryForm from './components/NewGalleryForm';
import FindArtist from './components/FindArtist';
import FindArtwork from './components/FindArtwork';
import Favorites from './components/Favorites';
import Library from './components/Library';

function App () {
    return (
        <Router>
            <Switch>
                <Route path="/signin" component={SignIn}/>
                <Route path="/new-gallery" component={NewGalleryForm}/>
                <Route path="/find-artist" component={FindArtist}/>
                <Route path="/find-artwork" component={FindArtwork}/>
                <Route path="/favorites" component={Favorites}/>
                <Route path="/library" component={Library}/>
                <Route path="/" component={HomePage}/>
            </Switch>
        </Router>
    )
}

export default App;