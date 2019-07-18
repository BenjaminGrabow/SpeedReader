import axios from 'axios';

export const ADD_TEXT = 'ADD_TEXT';
export const CHOOSE_THIS_TEXT = 'CHOOSE_THIS_TEXT';
export const MAKE_PAUSE = 'MAKE_PAUSE';
export const SHOW_TEXT_AFTER_PAUSE = 'SHOW_TEXT_AFTER_PAUSE';
export const OPEN_ADD_SETTINGS = 'OPEN_ADD_SETTINGS';
export const CLOSE_SETTINGS = 'CLOSE_SETTINGS';
export const OPEN_SETTINGS = 'OPEN_SETTINGS';
export const DELETE_TEXT = 'DELETE_TEXT';

// export const add = (owner, title, type, description,
//   price, availability, brand, model, imgURL,
//   renter) => (dispatch) => {
//     const numOwner = Number(owner);

//     const numPrice = Number(price);

//     const numRenter = Number(renter)

//     const newItem = {
//       owner: numOwner,
//       title: title,
//       type: type,
//       description: description,
//       price: numPrice,
//       availability: availability,
//       brand: brand,
//       model: model,
//       imgURL: imgURL,
//       renter: numRenter,
//     };

//     axiosWithAuth().post('https://usemytechstuffapp.herokuapp.com/api/items', newItem)
//       .then(res => {
//         dispatch({ type: ADD, payload: res.data.item })
//       })
//       .catch(err => {
//       });
//   };

// dispatch({ type: ADD_TEXT, textFromInput: text, name: textName });
export const addText = (textName, text) => dispatch() {
  axios.post('http://localhost:3500', newText)
  .then(res => {
    return axios.get('http://localhost:3500')
    .then(res => {
    })
  })
};

export const chooseThisText = (textName) => {
  return { type: CHOOSE_THIS_TEXT, name: textName };
};

export const makePause = (currentWord) => {
 return { type: MAKE_PAUSE, currentWord: currentWord };
};

export const showTextAfterPause = () => {
 return { type: SHOW_TEXT_AFTER_PAUSE };
};

export const openAddSettings = () => {
  return { type: OPEN_ADD_SETTINGS };
};

export const openSettings = () => {
  return { type: OPEN_SETTINGS };
};
 
export const closeSettings = () => {
 return { type: CLOSE_SETTINGS };
};

export const deleteText = (textName) => {
  return { type: DELETE_TEXT, textName: textName };
}
