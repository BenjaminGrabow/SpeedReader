const db = require('../data/db.js');

module.exports = {
  getAllWords
};

const getAllWords = () => {
  return db
    .select('word')
    .from('find_words');
};