
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('find_words').del()
    .then(function () {
      // Inserts seed entries
      return knex('find_words').insert([
        {id: 1, word: "underheated"},
        {id: 2, word: "underheating"},
        {id: 3, word: "underheats"}
      ]);
    });
};

const words = [,
  "underheating",
  "underheats",
  "underhonest",
  "underhung",
  "underinflated", "metrologic",
  "metrological",
  "metrologically",
  "metrologies",
  "metrologist",
  "metrologists", "defleaing",
  "defleas",
  "deflect",
  "deflectable",
  "deflected",
  "deflecting",
  "deflection",
  "deflectional",
  "deflections",
  "deflective",
  "deflector",
  "deflectors", "abhorrence",
  "abhorrences",
  "abhorrencies",
  "abhorrency",
  "abhorrent",
  "abhorrently",
  "abhorrer",
  "abhorrers", "insecurity",
  "inseem",
  "inseemed",
  "inseeming",
  "inseems",
  "inselberg",
  "inselberge",
  "inselbergs",
  "inseminate", "overchilled",
  "overchilling",
  "overchills",
  "overcivil",
  "overcivilised",
  "overcivilized",
  "overclad",
  "overclaim",
  "overclaimed",
  "overclaiming",
  "overclaims",
  "overclass",
  "overclasses",
  "overclassification"];
