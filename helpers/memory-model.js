const db = require('../data/db.js');

const getAllPictures = () => {
  return db
    .select('front_picture', 'back_picture')
    .from('memory_game');
};

module.exports = {
  getAllPictures
};