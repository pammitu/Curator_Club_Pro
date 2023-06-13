import React, { useState } from 'react';
import axios from 'axios';
import './ArtworkSearch.css';

function ArtworkSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('')

    

  const search = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.get(`https:/curator-club-pro.herokuapp.com/api/artworks/search/met?q=${searchQuery}`);
        const searchData = response.data;
        console.log(searchData); 

        const limitedIDs = searchData.objectIDs.slice(0, 60);

        // Use the Promise.all method to fetch all object details concurrently
        const details = await Promise.all(limitedIDs.map(async id => {
          const detailResponse = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
            return detailResponse.data;
        }));

        // Now details is an array of object data, so you can set it as the search results
        setSearchResults(details);
    } catch (error) {
        setError(error.message);
    }
};

    
    return (
      <div>
        <h1 className="main-title">Find an Artwork</h1>
        <form onSubmit={search} className="search-form">
        <input
            className="search-input"
            type="text"
            value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
            placeholder="Search for artwork..."
        />
        <button type="submit" className="search-button">Search</button>
    </form>

        {error && <p>{error}</p>}
        <h2 className="results-title">SEARCH RESULTS</h2>
        <div className="grid-container">
        {searchResults.map((result, index) => (
          <div className="grid-item" key={index}>
            {result.primaryImage && <img className="artwork-image" src={result.primaryImage} alt={result.title} />}
            <h3>{result.title}</h3>
            <p>{result.artistDisplayName}</p>
          </div>
        ))}
        </div>
      </div>
    );
}
  
export default ArtworkSearch;


