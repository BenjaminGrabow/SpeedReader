import * as types from './actions';

const initialState = {
  currentText: [],
  addText: true,
  settings: false,
  savedTexts: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TEXT:
      return { ...state, savedTexts: [...state.savedTexts, { text: action.textFromInput, name: [action.name] }] };

    case types.CHOOSE_THIS_TEXT:
const findText = state.savedTexts.filter(texts => texts.name[0] === action.name);

      return { ...state, addText: false, currentText: findText[0].text };

      case types.OPEN_ADD_SETTINGS:
          return { ...state, addText: true };

    case types.OPEN_SETTINGS:
      return { ...state, settings: true };

    case types.CLOSE_SETTINGS:
      return { ...state, settings: false };

    default: return state;
  }
};

export default reducer;