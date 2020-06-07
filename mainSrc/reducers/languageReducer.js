export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const SAVE_LANGUAGE = 'SAVE_LANGUAGE';

const initialState = {
  defaultLanguage: 'English',
  loading: false,
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        loading: true,
      };
    case SAVE_LANGUAGE:
      return {
        ...state,
        loading: false,
        defaultLanguage: action.languageValue,
      };
    default:
      return state;
  }
};

export default languageReducer;
