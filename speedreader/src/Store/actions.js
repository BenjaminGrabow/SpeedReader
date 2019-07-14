export const ADD_TEXT = 'ADD_TEXT';
export const CLOSE_SETTINGS = 'CLOSE_SETTINGS';
export const OPEN_SETTINGS = 'OPEN_SETTINGS';

export const addText = (textName, text) => {
  return { type: ADD_TEXT, textFromInput: text, name: textName };
};

export const openSettings = () => {
  return { type: OPEN_SETTINGS };
 };
 
export const closeSettings = () => {
 return { type: CLOSE_SETTINGS };
};
