import axios from 'axios';
import { axiosWithAuth } from './axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER = 'REGISTER';
export const FETCH_TEXTS = 'FETCH_TEXTS';
export const ADD_TEXT = 'ADD_TEXT';
export const CHOOSE_THIS_TEXT = 'CHOOSE_THIS_TEXT';
export const MAKE_PAUSE = 'MAKE_PAUSE';
export const SHOW_TEXT_AFTER_PAUSE = 'SHOW_TEXT_AFTER_PAUSE';
export const OPEN_ADD_SETTINGS = 'OPEN_ADD_SETTINGS';
export const CLOSE_SETTINGS = 'CLOSE_SETTINGS';
export const OPEN_SETTINGS = 'OPEN_SETTINGS';
export const DELETE_TEXT = 'DELETE_TEXT';
export const CHECK_USER_PREFERENCE = 'CHECK_USER_PREFERENCE';
export const SAFE_USER_PREFERENCE = 'SAFE_USER_PREFERENCE';
export const UPDATE_USER_PREFERENCE = 'UPDATE_USER_PREFERENCE';

const adress = 'http://localhost:3500/texts';

export const register = creds => dispatch => {
  return axios.post('http://localhost:3500/register', creds)
    .then(res => {
      debugger
      dispatch({ type: REGISTER });
    })
    .catch(err => {
      debugger
    })
};

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios.post('http://localhost:3500/login', creds)
    .then(res => {

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('id', res.data.id);

      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
      
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.message });
    });
};


export const fetchTexts = () => dispatch => {
  const userID = localStorage.getItem('id');
  debugger
  axiosWithAuth().get(`${adress}/user/${userID}`)
    .then(res => {
debugger
      dispatch({ type: FETCH_TEXTS, fetchedTexts: res.data });
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

export const makePause = (currentWord, indexOfCurrentWord) => {
  return { type: MAKE_PAUSE, currentWord: currentWord, indexOfCurrentWord: indexOfCurrentWord };
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

export const addText = (textName, text) => dispatch => {
  const usersID = localStorage.getItem('id');

  const newText = {
    text: text,
    name: textName,
    user_id: usersID
  };

  axios.post(adress, newText)
  .then(res => {

    return axiosWithAuth().get(`${adress}/user/${usersID}`)
    .then(res => {

      dispatch({ type: ADD_TEXT, addedText: res.data });
    });
  })
  .catch(err => {
   debugger
  });
};

export const deleteText = (id) => dispatch => {
  const theUserID = localStorage.getItem('id');

  axios.delete(`${adress}/${id}`)
  .then(res => {

    return axiosWithAuth().get(`${adress}/user/${theUserID}`)
    .then(res => {

      dispatch({ type: DELETE_TEXT, deletedText: res.data });
    });
  })
  .catch(err => {
    debugger
  }); 
}
