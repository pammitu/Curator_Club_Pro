const express = require('express');
const router = express.router();
const Artwork = require('../models/artwork');

router.put('/:username/collection/add' (req, res) => {
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



module.exports = router;