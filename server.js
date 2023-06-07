require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, {useNewURLParser: true, useUnifiedTopology: true})
.then(() => console.log('Database connection successful'))
.catch((err) => console.log(`Database connection error:${err}`));