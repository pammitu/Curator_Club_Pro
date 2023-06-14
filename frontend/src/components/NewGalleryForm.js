import React, { useState } from 'react';
import axios from 'axios';
import './NewGalleryForm.css';
import { searchArtworkMet, createNewGallery } from '../services/api';



function NewGalleryForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [selectedArtworks, setSelectedArtworks] = useState([]);
    const [galleries, setGalleries] = useState([]);
    const [newGallery, setNewGallery] = useState(null);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
      };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };

const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
        const galleryData = {
            title,
            description,
            artworks: selectedArtworks
        };
        const createdGallery = await createNewGallery(galleryData);
        setNewGallery(createdGallery);
        setGalleries([...galleries, createdGallery]);
        setTitle('');
        setDescription('');
        setSelectedArtworks([]);
        } catch (err) {
            console.error(err);
        }
    };
 

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const searchData = await searchArtworkMet(searchQuery);
            setSearchResults(searchData.objectIDs.slice(0, 60));
        } catch (err) {
            console.error(err);
        }
    };


const handleSelectArtwork = (artwork) => {
 
    setSelectedArtworks([...selectedArtworks, artwork]);
}


return (
    <div className="container">
        <h1>Create a New Gallery</h1>
        <form className="form" onSubmit={handleFormSubmit}>
            <label>Title:</label>
            <input
                className="input"
                type="text"
                value={title}
                onChange={handleTitleChange}
            />
            <label>Description:</label>
            <textarea
                className="textarea"
                value={description}
                onChange={handleDescriptionChange}
            />
            <button type="submit">Create Gallery</button>
        </form>
        {newGallery && (
            <div>
                <h2>New Gallery</h2>
                <h3>{newGallery.title}</h3>
                <p>{newGallery.description}</p>
            </div>
        )}
        <h2>Search for Artworks</h2>
        <form onSubmit={handleSearch}>
        <input
            type="text"
            value={searchQuery}
            onChange={handleSearchQueryChange}
        />
        <button type="submit">Search</button>
        </form>
        <h2>Search Results</h2>
        {searchResults.map((result, index) => (
            <div className="artwork" key={index}>
                <h3>{result.title}</h3>
                <p>{result.description}</p>
                <button onClick={() => handleSelectArtwork(result)}>
                    Add to Gallery
                    </button> {/*addbutton to add arwork to gallert*/}
            </div>
        ))}


    <h2>Created Galleries</h2>
    {galleries.map((gallery, index) => (
        <div key={index}>
            <h3>{gallery.title}</h3>
            <p>{gallery.description}</p>
            {gallery.artworks && gallery.artworks.length > 0 ? (
            gallery.artworks.map((artwork, index) => (
                <div key= {index}>
                    <h4>{artwork.title}</h4>
                    <p>{artwork.description}</p>
                </div>
            ))
    ) : (
            <p>No artworks in the Gallery</p>
    )}
        </div>
    ))}
    </div>
);
    }


export default NewGalleryForm;