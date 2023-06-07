const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtworkSchema = new Schema({
    name: { type: String, required: true },
    artist: { type: String, required: true },
    description: String,
    imageURL: String
});

module.exports = mongoose.model('Artwork', ArtworkSchema);