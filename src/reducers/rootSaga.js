import { all, call } from 'redux-saga/effects';
import { prodSagas } from '../saga/prod';


export default function* rootSaga(){
    yield all([
        call(prodSagas)
    ])
}