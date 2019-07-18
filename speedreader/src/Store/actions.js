import axios from 'axios';

export const FETCH_TEXTS = 'FETCH_TEXTS';
export const ADD_TEXT = 'ADD_TEXT';
export const CHOOSE_THIS_TEXT = 'CHOOSE_THIS_TEXT';
export const MAKE_PAUSE = 'MAKE_PAUSE';
export const SHOW_TEXT_AFTER_PAUSE = 'SHOW_TEXT_AFTER_PAUSE';
export const OPEN_ADD_SETTINGS = 'OPEN_ADD_SETTINGS';
export const CLOSE_SETTINGS = 'CLOSE_SETTINGS';
export const OPEN_SETTINGS = 'OPEN_SETTINGS';
export const DELETE_TEXT = 'DELETE_TEXT';

const adress = 'http://localhost:3500/texts';


export const fetchTexts = () => dispatch => {
    axios.get(adress)
    .then(res => {

      dispatch({ type: FETCH_TEXTS, fetchedTexts: res.data });
    })
  .catch(err => {
   debugger
  });
};


export const addText = (textName, text) => dispatch => {
  const newText = {
    text: text,
    name: textName
  };

  axios.post(adress, newText)
  .then(res => {

    return axios.get(adress)
    .then(res => {

      dispatch({ type: ADD_TEXT, addedText: res.data });
    });
  })
  .catch(err => {
   debugger
  });
};

export const chooseThisText = (textId) => dispatch => {
  axios.get(`${adress}/${textId}`)
  .then(res => {

    dispatch({ type: CHOOSE_THIS_TEXT, fetchedText: res.data })
  })
  .catch(err => {
    debugger
  });
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

export const deleteText = (id) => dispatch => {
  axios.delete(`${adress}/${id}`)
  .then(res => {

    return axios.get(adress)
    .then(res => {

      dispatch({ type: DELETE_TEXT, deletedText: res.data });
    });
  })
  .catch(err => {
    debugger
  }); 
}
