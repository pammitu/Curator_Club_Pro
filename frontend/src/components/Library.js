import React, { userEffect, useState } from 'react';
import axios from 'axios';
import Gallery from './Gallery';

function Library() {
    const [galleries, setGalleries] = useState([]);

    userEffect(() => {
        constfetchGalleries = async () => {
            try {
                //replacec url ith actual fetch galleries enpoint
                //and deplace artlover with act username
                const response = await axios.get('http://localhost:5000/user/artlover/galleries');
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