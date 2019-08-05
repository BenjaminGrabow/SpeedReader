const db = require("../data/db.js");

module.exports = {
  addUserPreference,
  findByUserId,
  updateUserPreferenceById,
};

async function addUserPreference(userPreference) {
return db("user_preference").insert(userPreference);
}

function findByUserId(id) {
  return db("user_preference")
    .where('user_id', id);
}

function updateUserPreferenceById({user_id, first_name, last_name, photo}, id) {
  return db('user_preference')
    .where('user_id', id )
    .update({user_id, first_name, last_name, photo});
};