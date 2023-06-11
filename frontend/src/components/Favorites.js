import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
            {favoriteArtworks.map((artwork, index) => (
                <div key={index}>
                    <h3>{artwork.title}</h3>
                    <img src={artwork.imageUrl} alt={artwork.title} />
                    <p>{artwork.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Favorites;