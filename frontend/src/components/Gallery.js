import React from 'react';

function Gallery({ gallery }) {
    return (
        <div>
            <h2>{gallery.name}</h2>
            {gallery.artworks.map((artwork,index) => (
                <div key={index}>
                    <img src={artwork.image} alt={artwork.title} />
                    <p>{artwork.title} by {artwork.artist}</p>
                </div>
            ))}
        </div>
    );
}

export default Gallery;