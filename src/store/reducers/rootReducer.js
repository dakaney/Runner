import authReducer from './authReducer';
import routeReducer from './routeReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    route: routeReducer,
    firestore: firestoreReducer
})

export default rootReducer;
