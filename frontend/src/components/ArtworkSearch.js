import React, { useState } from 'react';
import axios from 'axios';

function ArtworkSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
  
    const search = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`/api/artworks/search/met?q=${searchQuery}`);
            const searchData = response.data;
            console.log(searchData); 
    
            // Limit the number of IDs to 10 using slice
            const limitedIDs = searchData.objectIDs.slice(0, 30);
    
            // Use the Promise.all method to fetch all object details concurrently
            const details = await Promise.all(limitedIDs.map(async id => {
                const detailResponse = await axios.get(`${'https://collectionapi.metmuseum.org/public/collection/v1'}/objects/${id}`);
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
        <h1>Find an Artist</h1>
        <form onSubmit={search}>
          <input
            type="text"
            value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        {error && <p>{error}</p>}
        <h2>Search Results</h2>
        {searchResults.map((result, index) => (
          <div key={index}>
            <h3>{result.title}</h3>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default ArtworkSearch;
  
