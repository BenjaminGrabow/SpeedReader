const router = require('express').Router();

const Text = require('./text-model.js');

router.get('/texts', async (req, res) => {
  try {
    const texts = await Text.getAllTexts('texts');
    res.status(200).json(texts);
  } catch (error) {
    res.status(500).json({ error: 'Cannot retrieve the texts' });
  }
});

router.get("/texts/:id", async (req, res) => {
  const getText = await Text.getTextById(req.params.id);

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

router.post("/texts", async (req, res) => {

  const arrayOfId = await Text.createNewText(req.body);

  const arrayOfText = await Text.getTextById(arrayOfId[0]);

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

router.put("/texts/:id", async (req, res) => {
  const { text, name } = req.body;

  const result = await Text.updateTextById({ text, name }, req.params.id);

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

router.delete('/texts/:id', async (req, res) => {
  const deleteText = await Text.deleteTextById(req.params.id);

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

  module.exports = router;