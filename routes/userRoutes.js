const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', (req, res) => {
    //register new user
    //using the user model to create a new user in the datebase
    //need to hash the users password before saving it
});

router.get('/:username/collection', function(req, res)  {
    User
    .findOne({ username: req.params.username })
    .populate('collection')
    .exec(function (err,user) {
        if (err) return res.status(500).send(err);
        res.send(user.collection);
    });
});

module.exports = router;