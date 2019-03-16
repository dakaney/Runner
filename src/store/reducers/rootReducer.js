import authReducer from './authReducer';
import routeReducer from './routeReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    route: routeReducer
})

export default rootReducer;
