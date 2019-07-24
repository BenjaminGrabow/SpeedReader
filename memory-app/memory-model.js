const db = require('../data/db.js');

module.exports = {
  getAllPictures
};

const getAllPictures = () => {
  return db
    .select('front_picture', 'back_picture')
    .from('memory_game');
};

