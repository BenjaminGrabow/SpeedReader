const express = require('express');
const cors = require('cors');
const db = require('./data/db.js');

const server = express();

server.use(express.json());
server.use(cors());

///// TEXT SECTION ///
const getAllTexts = () => {
  return db('texts');
};

const getTextById = (id) => {
  return db('texts').where({ id });
};

const createNewText = (text) => {
  return db('texts').insert(text);
};

const updateTextById = ({ text, name }, id) => {
  return db('texts').where({ id }).update({ text, name });
};

const deleteTextById = (id) => {
  return db('texts').where({ id }).del();
};

server.get('/texts', async (req, res) => {
  try {
    const texts = await db('texts');
    res.status(200).json(texts);
  } catch (error) {
    res.status(500).json({ error: 'Cannot retrieve the texts' });
  }
});

server.get("/texts/:id", async (req, res) => {
  const getText = await getTextById(req.params.id);
  try {
    if (getText) {
      res.status(200).json(getText);
    } else {
      res.status(400).json({ message: 'invalid Id ' });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: `request could'nt process` });
  }
});

server.post("/texts", async (req, res) => {
  const arrayOfId = await createNewText(req.body);
  const arrayOfText = await getTextById(arrayOfId[0]);
  try {
    if (arrayOfId) {
      res.json(arrayOfText[0]);
    } else {
      res.status(400).json({ message: 'invalid Id ' });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: `request could'nt process` });
  }
});

server.put("/texts/:id", async (req, res) => {
  const { text, name } = req.body;
  const result = await updateTextById({ text, name }, req.params.id);
  try {
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(400).json({ message: 'invalid Id ' });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: `request could'nt process` });
  }
});

server.delete('/texts/:id', async (req, res) => {
  const deleteText = await deleteTextById(req.params.id);
  try {
    if (deleteText) {
      res.status(200).json(deleteText);
    } else {
      res.status(400).json({ message: 'invalid Id ' });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: `request could'nt process` });
  }
});

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


module.exports = server;