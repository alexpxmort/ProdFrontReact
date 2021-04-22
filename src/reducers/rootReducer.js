

    /**
 *Reducer Principal que agrupa todos os reducers
 * 
 */
    
import { combineReducers } from "redux";

import prodReducer from './prod/index'

 const rootReducer = combineReducers({
    prodX:prodReducer
 });

export default rootReducer;