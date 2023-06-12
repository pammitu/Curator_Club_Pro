import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Favorites.css';

function Favorites() {
    const [favoriteArtworks, setFavoriteArtworks] = useState([]);

    useEffect(() => {
        const FetchFavorites = async () => {
            try {
                //remember to replace actual endpoint for efetching the user
                const response = await axios.get('http://localhost:5000/user/artlover');
                //assums that the user's artwork collection field is populated
                setFavoriteArtworks(response.data.artworkCollection);
            } catch (err) {
                console.error(err);
            }
        };
    
        FetchFavorites();
    }, []);
 
    return (
        <div>
            <h1>My Favorites</h1>
            <div className='grid-container'>
            {favoriteArtworks.map((artwork, index) => (
                <div className="grid-item" key={index}>
                    <h3>{artwork.title}</h3>
                    <img className="artwork-image" src={artwork.imageUrl} alt={artwork.title} />
                    <p>{artwork.description}</p>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Favorites;