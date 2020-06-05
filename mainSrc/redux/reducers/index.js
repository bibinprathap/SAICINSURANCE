// Imports: Dependencies
import {combineReducers} from 'redux';
import bankProfileReducer from './bankProfileReducer';
import environmentReducer from './environmentReducer';

import attachmentReducer from './attachmentReducer';
import languageReducer from '../../screens/LanguageScreen/store/reducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  language: languageReducer,
  bankProfileReducer: bankProfileReducer,
  environmentReducer: environmentReducer,
  attachments:attachmentReducer
});

// Exports
export default rootReducer;
