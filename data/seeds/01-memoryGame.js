exports.seed = function (knex) {
  return knex('memory_game').del()
    .then(function () {
      return knex('memory_game').insert([
        {
          id: 1, back_picture: 'https://images.pexels.com/photos/677974/pexels-photo-677974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          front_picture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 2, back_picture: 'https://images.pexels.com/photos/34106/zebra-wild-animal-africa-stripes.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          front_picture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 3, back_picture: 'https://images.pexels.com/photos/52509/penguins-emperor-antarctic-life-52509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          front_picture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 4, back_picture: 'https://images.pexels.com/photos/39571/gorilla-silverback-animal-silvery-grey-39571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          front_picture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 5, back_picture: 'https://images.pexels.com/photos/60506/indian-elephant-elephant-jumbo-strongest-60506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          front_picture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 6, back_picture: 'https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          front_picture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 7, back_picture: 'https://images.pexels.com/photos/1827212/pexels-photo-1827212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          front_picture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 8, back_picture: 'https://images.pexels.com/photos/34106/zebra-wild-animal-africa-stripes.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          front_picture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 9, back_picture: 'https://images.pexels.com/photos/2625782/pexels-photo-2625782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          front_picture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 10, back_picture: 'https://images.pexels.com/photos/677974/pexels-photo-677974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          front_picture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 11, back_picture: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          front_picture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 12, back_picture: 'https://images.pexels.com/photos/39571/gorilla-silverback-animal-silvery-grey-39571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          front_picture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 13, back_picture: 'https://images.pexels.com/photos/52509/penguins-emperor-antarctic-life-52509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          front_picture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 14, back_picture: 'https://images.pexels.com/photos/60506/indian-elephant-elephant-jumbo-strongest-60506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          front_picture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 15, back_picture: 'https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          front_picture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 16, back_picture: 'https://images.pexels.com/photos/1827212/pexels-photo-1827212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          front_picture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 17, back_picture: 'https://images.pexels.com/photos/2625782/pexels-photo-2625782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          front_picture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 18, back_picture: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          front_picture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
      ]);
    });
};

