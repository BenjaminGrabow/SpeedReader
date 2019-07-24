const db = require('../data/db.js');

module.exports = {
  getAllTexts,
  getTextById,
  createNewText,
  updateTextById,
  deleteTextById
};

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
