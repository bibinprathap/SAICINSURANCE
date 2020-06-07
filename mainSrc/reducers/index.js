// Imports: Dependencies
import {combineReducers} from 'redux';
import HomeReducer from '../screens/HomeScreen/store/reducer';
import loginReducers from './loginReducers';
import environmentReducer from './environmentReducer';

import attachmentReducer from './attachmentReducer';
import languageReducer from './languageReducer'

// Redux: Root Reducer
const rootReducer = combineReducers({
  home:HomeReducer,
  login:loginReducers,
  language: languageReducer, 
  environmentReducer: environmentReducer,
  attachments:attachmentReducer
});

// Exports
export default rootReducer;
