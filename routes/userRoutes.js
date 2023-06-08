const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    const user = await User.findOne({ username: username });

    if (user) {
        return res.status(400).json({ message: 'User already exists'});
    }

    bcrypt.hash(password, 10, function(err, hashedPass) {
        if (err) {
            return res.status(500).json({message: 'An error occurred', error: err});
        }
        let newUser = new User({
            username: username,
            email: email,
            password: hashedPass
        });
        newUser.save()
        .then(user => {
            res.status(201).json({message: 'User Added Successfully'});
        })
        .catch(error => {
            res.status(500).json({message: 'An error occurred', error: error});
        });
    });
});

const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    const user = await User.findOne({username: username});

    if (!user) {
        return res.status(404).json({ mesage: 'No user found '});
    }

    bcrypt.compare(password, user.password, function(err, result) {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.status(200).json({ message: 'Login Successful', token: token });
        } else {
            return res.status(401).json({ message: 'Incorrect Password' });
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