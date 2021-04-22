    /**
 *Configuração da store
 * 
 */

import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import logger from 'redux-logger';

const sagaMiddleWare = createSagaMiddleware();
const middlewares = [sagaMiddleWare];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}
export const store   = createStore(rootReducer,applyMiddleware(...middlewares));

sagaMiddleWare.run(rootSaga);

 export default {store};