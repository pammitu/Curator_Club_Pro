const express = require('express');
const router = express.router();
const Artwork = require('../models/artwork');

router.put('/:username/collection/add', async (req, res) => {
    const artworkId = req.body.artworkId;
    const username = req.params.username;

    const user = await User.findOne({ username: username });
    const artwork = await Artwork.findById(artworkId);

if (!user) {
    return res.status(404).json({ message: 'User not found' });
}

if (!artwork) {
    return res.status(404).json({ message: 'Artowrk not found' });
}

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

router.get('/search', (req, res) => {
    let query = req.query.q;
    Artwork.find({ $text: { $search: query } }, function(err, artworks) {
        if (err) return res.status(500).send(err);
        res.send(artworks);
    });
});

module.exports = router;