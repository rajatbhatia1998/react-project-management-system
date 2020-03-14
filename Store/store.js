import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from '../Reducers/authReducer.js'





const store = createStore(authReducer, composeWithDevTools());


export default store;