import React, { useState } from 'react';
import axios from 'axios';

function NewGalleryForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [selectedArtworks, setSelectedArtworks] = useState([]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    }

const handleFormSubmit = (e) => {
    e.preventDefault();
    //here need to implement creating a new gallery maybing using post to backend API and 
    //to include selected artworks in the request
 }
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            //replace '/search' with you actual search endpoint
            const response = await axios.get(`/search?query=${searchQuery}`);
            setSearchResults(response.data);
        } catch (err) {
            console.error(err);
        }
    }


const handleSelectArtwork = (artwork) => {
    //add selected artwork to the listof selected artowtk
    setSelectedArtworks([...selectedArtworks, artwork]);
}


return (
    <div>
        <h1>Create a New Gallery</h1>
        <form onSubmit={handleFormSubmit}>
            <label>Title:</label>
            <input
                type="text"
                value={title}
                onChange={handleTitleChange}
            />
            <label>Description:</label>
            <textarea
                value={description}
                onChange={handleDescriptionChange}
            />
            <button type="submit">Create Gallery</button>
        </form>
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
        { searchResults.map((result, index) => (
            <div key={index}>
                <h3>{result.title}</h3>
                <p>{result.description}</p>
                <button onClick={() => handleSelectArtwork(result)}>Add to Gallery</button> {/*addbutton to add arwork to gallert*/}
            </div>
        ))}
        <h2>Selected Artworks</h2>
        {selectedArtworks.map((artwork, index) => (
            <div key={index}>
                <h3>{artwork.title}</h3>
                <p>{artwork.description}</p>
            </div>
        ))}
    </div>
)
        }

export default NewGalleryForm;