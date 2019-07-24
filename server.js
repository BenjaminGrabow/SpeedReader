const express = require('express');
const cors = require('cors');
const db = require('./data/db.js');

const server = express();

server.use(express.json());
server.use(cors());

///// TEXT SECTION ///


/// MEMORYGAME SECTION ////

const getAllPictures = () => {
  return db
    .select('front_picture', 'back_picture')
    .from('memory_game');
};

server.get('/memory_game', async (req, res) => {
  try {
    const pictures = await getAllPictures();
    res.status(200).json(pictures);
  } catch (error) {
    res.status(500).json({ error: 'Cannot retrieve the pictures !' });
  }
});

/// Find_Words SECTION ////

const getAllWords = () => {
  return db
    .select('word')
    .from('find_words');
};

server.get('/find_words', async (req, res) => {
  try {
    const words = await getAllWords();
    res.status(200).json(words);
  } catch (error) {
    res.status(500).json({ error: 'Cannot retrieve the words !' });
  }
});


module.exports = server;