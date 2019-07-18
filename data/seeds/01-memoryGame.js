exports.seed = function (knex) {
  return knex('table_name').del()
    .then(function () {
      return knex('table_name').insert([
        {
          id: 1, backPicture: 'https://images.pexels.com/photos/677974/pexels-photo-677974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          frontPicture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 2, backPicture: 'https://images.pexels.com/photos/34106/zebra-wild-animal-africa-stripes.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          frontPicture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 3, backPicture: 'https://images.pexels.com/photos/52509/penguins-emperor-antarctic-life-52509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          frontPicture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 4, backPicture: 'https://images.pexels.com/photos/39571/gorilla-silverback-animal-silvery-grey-39571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          frontPicture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 5, backPicture: 'https://images.pexels.com/photos/60506/indian-elephant-elephant-jumbo-strongest-60506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          frontPicture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 6, backPicture: 'https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          frontPicture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 7, backPicture: 'https://images.pexels.com/photos/1827212/pexels-photo-1827212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          frontPicture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 8, backPicture: 'https://images.pexels.com/photos/34106/zebra-wild-animal-africa-stripes.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          frontPicture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 9, backPicture: 'https://images.pexels.com/photos/2625782/pexels-photo-2625782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          frontPicture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 10, backPicture: 'https://images.pexels.com/photos/677974/pexels-photo-677974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          frontPicture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 11, backPicture: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          frontPicture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 12, backPicture: 'https://images.pexels.com/photos/39571/gorilla-silverback-animal-silvery-grey-39571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          frontPicture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 13, backPicture: 'https://images.pexels.com/photos/52509/penguins-emperor-antarctic-life-52509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          frontPicture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 14, backPicture: 'https://images.pexels.com/photos/60506/indian-elephant-elephant-jumbo-strongest-60506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          frontPicture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 15, backPicture: 'https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          frontPicture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 16, backPicture: 'https://images.pexels.com/photos/1827212/pexels-photo-1827212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          frontPicture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 17, backPicture: 'https://images.pexels.com/photos/2625782/pexels-photo-2625782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          frontPicture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 18, backPicture: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          frontPicture: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
      ]);
    });
};

