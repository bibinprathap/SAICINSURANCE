import AsyncStorage from '@react-native-community/async-storage';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'; 
import rootReducer from '../reducers/index';
import {reducer as formReducer} from 'redux-form'; 
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';


 
// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(
    ReduxThunk,
    createLogger(),
  ),
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {
  store,
  persistor,
};
