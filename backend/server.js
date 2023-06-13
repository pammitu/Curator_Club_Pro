const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

require('dotenv').config();

const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const artworkRoutes = require('./routes/artworkRoutes');

app.use('/api/user', userRoutes);
app.use('/api/artworks', artworkRoutes);


const path = require('path');

app.use(express.static(path.join(__dirname, '../../frontend')));

mongoose.connect(process.env.DATABASE_URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log('Database connection successful'))
.catch((err) => console.log(`Database connection error:${err}`));

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000");
});

