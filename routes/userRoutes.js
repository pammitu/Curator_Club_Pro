const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
        if(err) {
            res.json({error: err});
        }
        let user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        });
        user.save()
        .then(user => {
            res.json({message: 'User Added Successfully'});
        })
        .catch(error => {
            res.json({message: 'An error occurred', error: error});
        });
    });
});

router.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, function(err, result) {
                if(err) {
                    res.json({error: err});
                }
                if(result) {
                    //password match you  can generate a token 
                    res.json({message: 'Login Successful'});
                } else {
                    //if password doesnt match
                    res.json({message: 'Incorrect Password'});
                }
            })
        } else {
            res.json({message: 'No user found'});
        }
    });
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