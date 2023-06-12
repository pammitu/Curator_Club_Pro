// const express = require('express');
// const router = express.Router();
// const User = require('../models/user');
// const Artwork = require('../models/artwork');
// const { MET_API_BASE_URL, EUROPEANA_API_BASE_URL } = require('../config/constants');
// const axios = require('axios');


// router.put('/:username/collection/add', async (req, res) => {
//     const artworkId = req.body.artworkId;
//     const username = req.params.username;

//     const user = await User.findOne({ username: username });
//     const artwork = await Artwork.findById(artworkId);

// if (!user) {
//     return res.status(404).json({ message: 'User not found' });
// }

// if (!artwork) {
//     return res.status(404).json({ message: 'Artowrk not found' });
// }

//     user.findOneAndUpdate(
//         { username: username },
//         { $push: { artworkCollection: artworkId } },
//         function(err, result) {
//             if (err) {
//                 return res.status(500).json({ message:' An error occured', error: err});
//             } else {
//                 return res.status(200).json(result);
//             }
//         }
//     );
// });

// router.get('/search/met', (req, res) => {
//     let query = req.query.q;
//     axios.get(`${MET_API_BASE_URL}/artworks`, {
//         params: {
//             q: query
//         }
//     })
//     .then(response => {
//         res.send(response.data);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     });
// });

// router.get('/search/europeana', (req,res) => {
//     let query = req.query.q;
//     axios.get(`${EUROPEANA_API_BASE_URL}/search.json`, {
//         params: {
//             query: query,
//             wskey: process.env.EUROPEANA_API_KEY //the API key should be stored in env variable
//         }
//     })
//     .then(response => {
//         res.send(response.data);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const axios = require('axios');

const { MET_API_BASE_URL } = require('../config/constants');

router.put('/:username/collection/add', async (req, res) => {
  const artworkId = req.body.artworkId;
  const username = req.params.username;

  try {
    // Add your logic to update the user's artwork collection
    // based on the artworkId and username
    // ...

    return res.status(200).json({ message: 'Artwork added to collection' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred', error: err });
  }
});

router.get('/api/artworks/search/met', (req, res) => {
    let query = req.query.q;
    axios
      .get(`${MET_API_BASE_URL}/search`, {
        params: {
          q: query,
        },
      })
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

module.exports = router;
