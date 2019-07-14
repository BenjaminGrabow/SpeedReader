export const ADD_TEXT = 'ADD_TEXT';
export const CHOOSE_THIS_TEXT = 'CHOOSE_THIS_TEXT';
export const OPEN_ADD_SETTINGS = 'OPEN_ADD_SETTINGS';
export const CLOSE_SETTINGS = 'CLOSE_SETTINGS';
export const OPEN_SETTINGS = 'OPEN_SETTINGS';

export const addText = (textName, text) => {
  return { type: ADD_TEXT, textFromInput: text, name: textName };
};

export const chooseThisText = (textName) => {
  return { type: CHOOSE_THIS_TEXT, name: textName }
}

export const openAddSettings = () => {
  return { type: OPEN_ADD_SETTINGS }
}

export const openSettings = () => {
  return { type: OPEN_SETTINGS };
 };
 
export const closeSettings = () => {
 return { type: CLOSE_SETTINGS };
};
