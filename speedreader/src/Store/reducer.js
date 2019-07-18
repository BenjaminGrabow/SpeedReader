import * as types from './actions';

const initialState = {
  savedTexts: [],
  currentText: [],
  textIfPause: [],
  addText: true,
  settings: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TEXT:
      const copyOfAddedText = action.addedText;

      copyOfAddedText.map(text => text.text = text.text.split(' '));
      
      return { ...state, savedTexts: copyOfAddedText };

    case types.CHOOSE_THIS_TEXT:
      const findText = state.savedTexts.filter(texts => texts.name[0] === action.name);

      return { ...state, addText: false, currentText: findText[0].text };

    case types.MAKE_PAUSE:
      const onlyTheTextAfterTheCurrentWord = state.currentText.slice(state.currentText.indexOf(action.currentWord), state.currentText.length);

      return { ...state, currentText: [action.currentWord], textIfPause: onlyTheTextAfterTheCurrentWord };

    case types.SHOW_TEXT_AFTER_PAUSE:

      return { ...state, currentText: state.textIfPause };

    case types.OPEN_ADD_SETTINGS:
      return { ...state, addText: true };

    case types.OPEN_SETTINGS:
      return { ...state, settings: true };

    case types.CLOSE_SETTINGS:
      return { ...state, settings: false };

    case types.DELETE_TEXT:
        const copyOfDeletedText = action.deletedText;
debugger
        copyOfDeletedText.map(text => text.text = text.text.split(' '));
debugger
      return { ...state, savedTexts: copyOfDeletedText };

    default: return state;
  }
};

export default reducer;