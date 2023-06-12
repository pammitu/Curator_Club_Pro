const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

router.post('/api/user/register', async (req, res) => {
    console.log('Register endpoint reached');
    const { username, email, password } = req.body;

   const userByUsername = await User.findOne({ username: username });
   const userByEmail = await User.findOne({ email: email });

   if (userByUsername) {
    return res.status(400).json({ message: 'Username already esists'});
   }

   if (userByEmail) {
    return res.status(400).json({ message: 'Email already exists'});
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

router.post('/api/user/login', async (req, res) => {
    console.log('Login endpoint reached')
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
        console.log('Login successful');
    });

     


router.get('/:username/collection', function(req, res)  {
    User
    .findOne({ username: req.params.username })
    .populate('artworkCollection')
    .exec(function (err,user) {
        if (err) return res.status(500).send(err);
        res.send(user.artworkCollection);
    });
});

router.get('/:username/favorites', async (req, res) => {
    const username = req.params.username;

    try{
        //find the user and populate the artwork collection field
        const user = await User.findOne({ username: username }).populate('artworkCollection');

        if (!user) {
            return res.status(404).json({ message: 'User Not Found'});
        } 

        //send the populated artwork colelction field as the response
        res.status(200).json(user.artworkCollection);
    } catch (err) {
        res.status(500).json({ message: 'An error occurred', error : err });
    }
});

module.exports = router;