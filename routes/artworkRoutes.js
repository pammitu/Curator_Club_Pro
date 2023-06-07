const express = require('express');
const router = express.router();
const Artwork = require('../models/artwork');

router.put('/:username/collection/add', (req, res) => {
    const artworkId = req.body.artworkId;
    user.findOneAndUpdate(
        { username: req.params.username },
        { $push: { collection: artworkId } },
        function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
});

router.get('/seearch', (req, res) => {
    let query = req.query.q;
    Artwork.find({ $text: { $search: query } }, function(err, artworks) {
        if (err) return res.status(500).send(err);
        res.send(artworks);
    });
});

module.exports = router;