import React, {useState } from 'react';
import axios from 'axios';
import artwork from '../../../backend/models/artwork';

function FindArtist() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [favoriteArtworks, setFavoriteArtworks] = useState([]); //the fav artworks

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            //replace search with your actual search endpoint
            const response = await axios.get(`/search?query=${searchQuery}`);
            setSearchResults(response.data);
        } catch (err) {
            console.error(err);
        }
    }
    const handleAddTofavorite =(artwork) => {
        //add the selcted artwork to the lsit of favoritre artworks
        setFavoriteArtworks([...favoriteArtworks, artwork]);
        //here you willneed to implement adding an artwork to the users favorites
        //this could involve making a post request to your backend api
    }
    return (
        <div>
            <h1>Find an Artist</h1>
            <form onSubmit={handleSearch}>
                <input
                type="text"
                value={searchQuery}
                onChange={handleSearchQueryChange}
                />
                <button type='submit'>Search</button>
            </form>
            <h2>Search Results</h2>
            {searchResults.map((result, index) => (
                <div key={index}>
                    <h3>{result.title}</h3>
                    <p>{result.description}</p>
                    <button onClick={() => handleAddToFavorites(result)}>Add to Favorites</button>
                </div>
            ))}
            <h2>Favorite Artworks</h2>
            {favoriteArtowkrs.map((artwork, index) => (
                <div key={index}>
                    <h3>{artwork.title}</h3>
                    <p>{artwork.description}</p>
                </div>
            ))}
        </div>
    )
}

export default FindArtist;