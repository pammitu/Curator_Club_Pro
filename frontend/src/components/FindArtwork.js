import React, { useState } from 'react';
import axios from 'axios';

function FindArtwork () {
    const [query, setQuery] = useState('');
    const [artworks, setArtworks] = useState([]);

    const handleSearch = async () => {
        try{
            const response = await axios.get(`/api/search/artwork/${query}`);
            setArtworks(response.data.artworks);
        } catch (err) {
            console.error(err);
        }
    }

    const handleAddToFavorites= async (artwork) => {
        try {
            //add the artwork to the users favorites adjust this to match
            await axios.post('/api/favorites', { artworkID: artwork.id });
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <h1>Find An Artwork</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            {artworks.map((artwork) => (
                <div key={artwork.id}>
                    <h2>{artwork.title}</h2>
                    <img src={artwork.imageUrl} alt={artwork.title} />
                    <button onClick={() => handleAddToFavorites()}>Add to Favorites</button>
                </div>
            ))}
        </div>
    );
}

export default FindArtwork;