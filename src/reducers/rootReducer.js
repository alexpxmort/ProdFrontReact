import { combineReducers } from "redux";

import prodReducer from './prod/index'

 const rootReducer = combineReducers({
    prod:prodReducer
 });

export default rootReducer;