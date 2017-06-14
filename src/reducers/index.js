import { combineReducers } from 'redux';
import globalReducer from './global_reducer';
import signinReducer from './signin_reducer';

const rootReducer = combineReducers({
    /*Add the reducers in here*/
    globalReducer,
    signinReducer
});

export default rootReducer;