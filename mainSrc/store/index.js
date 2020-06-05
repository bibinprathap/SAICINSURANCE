import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import HomeReducer from '../screens/HomeScreen/store/reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  home: HomeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
