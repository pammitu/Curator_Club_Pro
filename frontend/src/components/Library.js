import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Gallery from './Gallery';

function Library() {
    const [galleries, setGalleries] = useState([]);

    useEffect(() => {
        const fetchGalleries = async () => {
            try {
                //replacec url ith actual fetch galleries enpoint
                //and deplace artlover with act username
                const response = await axios.get('https://curator-club-pro.herokuapp.com/api/galleries');
                setGalleries(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchGalleries();
    }, []);

    return (
        <div>
            <h1>My Galleries</h1>
            {galleries.map((gallery) => (
                <Gallery key={gallery._id} gallery={gallery}/>
            ))}
        </div>
    );
}

export default Library;