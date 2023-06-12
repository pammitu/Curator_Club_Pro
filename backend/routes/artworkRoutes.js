const express = require('express');
const router = express.Router();
const axios = require('axios');
const User = require('../models/user');

const { MET_API_BASE_URL } = require('../config/constants');

router.put('/:username/collection/add', async (req, res) => {
  const artworkId = req.body.artworkId;
  const username = req.params.username;

  try {
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(404).json({ message: 'User not found'});
    }

        user.artworks.push(artworkId);
        await user.save();

        return res.status(200).json({ message: 'Artwork added to collection' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'An error occurred', error: err });
    }
});

router.get('/search/met', (req, res) => {
    let query = req.query.q;

    console.log("Query: ", query); // DEBUG: Check query

    axios.get(`${MET_API_BASE_URL}/search`, { params: { q: query } }) // Changed /search to /objects
    .then(response => {
        console.log("MET API Response: ", response.data); // DEBUG: Check response
        res.send(response.data);
    })
    .catch(error => {
        console.error("MET API Error: ", error); // DEBUG: Check error
        res.status(500).send(error);
    });
});

module.exports = router;