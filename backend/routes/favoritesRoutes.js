const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite'); 

router.post('/', async (req, res) => {
    try {
        const { objectID, title, artistDisplayName, primaryImage, userID } = req.body;
        
        const newFavorite = new Favorite({ 
            objectID,
            title,
            artistDisplayName,
            primaryImage,
            userID
        });
        
        await newFavorite.save();

        res.status(200).json(newFavorite);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

module.exports = router;