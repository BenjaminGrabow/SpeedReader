import * as types from './actions';

const initialState = {
  loading: false,
  error: null,
  loggingIn: false,
  savedTexts: [],
  currentText: [],
  textIfPause: [],
  addText: true,
  settings: false,
  userData: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER:
      return { ...state };

    case types.LOGIN_START:
      return { ...state, loggingIn: true };

    case types.LOGIN_SUCCESS:
      return { ...state, loggingIn: false };

    case types.LOGIN_FAIL:
      return { ...state, loggingIn: false, error: action.payload }

    case types.FETCH_TEXTS:
      const copyOfFetchedTexts = action.fetchedTexts;

      copyOfFetchedTexts.map(text => text.text = text.text.split(' '));

      return { ...state, savedTexts: copyOfFetchedTexts };

    case types.ADD_TEXT:
      const copyOfAddedText = action.addedText;

      copyOfAddedText.map(text => text.text = text.text.split(' '));

      return { ...state, savedTexts: copyOfAddedText };

    case types.CHOOSE_THIS_TEXT:
        const copyOfFetchedText = action.fetchedText;

        copyOfFetchedText.map(text => text.text = text.text.split(' '));

      return { ...state, addText: false, currentText: copyOfFetchedText[0].text };

    case types.MAKE_PAUSE:
      const onlyTheTextAfterTheCurrentWord = state.currentText.slice(action.indexOfCurrentWord, state.currentText.length);

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

      copyOfDeletedText.map(text => text.text = text.text.split(' '));

      return { ...state, savedTexts: copyOfDeletedText };

      case types.SAFE_USER_PREFERENCE:
      const newUser = action.user_preference;

      return { ...state, userData: newUser };

    case types.CHECK_USER_PREFERENCE:

      return { ...state, userData: action.user_preference };

    case types.UPDATE_USER_PREFERENCE:

      return { ...state, userData: action.user_preference };

    default: return state;
  }
};

export default reducer;