const db = require('../data/db.js');


const getAllWords = () => {
  return db
    .select('word')
    .from('find_words');
};

module.exports = {
  getAllWords
};