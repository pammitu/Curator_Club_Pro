require('dotenv').config();

const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const artworkRoutes = require('./routes/artworkRoutes');

app.use('/user', userRoutes);
app.use('/artworks', artworkRoutes);


mongoose.connect(process.env.DB_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true
})

.then(() => console.log('Database connection successful'))
.catch((err) => console.log(`Database connection error:${err}`));