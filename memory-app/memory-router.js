const router = require('express').Router();

const Picture = require('./memory-model.js');

router.get('/memory_game', async (req, res) => {
  try {
    const pictures = await Picture.getAllPictures();
    res.status(200).json(pictures);
  } catch (error) {
    res.status(500).json({ error: 'Cannot retrieve the pictures !' });
  }
});

module.exports = router;