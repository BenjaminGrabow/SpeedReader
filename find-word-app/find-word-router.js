const router = require('express').Router();

const Words = require('./find-word-model');

router.get('/find_words', async (req, res) => {
  try {
    const words = await Words.getAllWords();
    res.status(200).json(words);
  } catch (error) {
    res.status(500).json({ error: 'Cannot retrieve the words !' });
  }
});

module.exports = router;