import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import global from './global/reducer';

const rootReducer = combineReducers({ global });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
