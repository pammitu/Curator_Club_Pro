const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
    objectID: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    artistDisplayName: {
        type: String,
        required: true
    },
    primaryImage: {
        type: String,
        required: true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', // Assuming you have a User model
        required: true
    }
});

module.exports = mongoose.model('Favorite', FavoriteSchema);
