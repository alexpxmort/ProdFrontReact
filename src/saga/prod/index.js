import { takeLatest, call, put,all } from 'redux-saga/effects';
import _ from 'lodash'
import {Message} from '../../components/msg_alerts/msg_alerts'
import {
 addProdFailure,
 addProdSuccess,
 fetchProdFailure,
 fetchProdSuccess,
 deleteProdSuccess,
 deleteProdFailure,
 getProdFailure,
 getProdSuccess,
 editProdSuccess,
 editProdFailure
} from '../../reducers/actions/prod/index';

import {ProdActionTypes} from '../../reducers/types';
import {getAllMethod,createMethod,deleteMethod,getByIdMethod,updateMethod} from '../../requests/api/api';

export function* addProdyAsync({payload}) {
    try {

      const newProd = yield createMethod(payload,'produtos');
      
      yield put(addProdSuccess(newProd.produto));

     
      if(!newProd.error){
        yield  Message('Produto Salvo com Sucesso !!','success');
      } else{
        let msg = `${newProd.msg}  \n${(newProd.erros)?JSON.stringify(newProd.erros):''}`
        yield Message(msg,'warning');
      }
    } catch (error) {
      yield put(addProdFailure(error.message));
      yield Message(error.message,'warning'); 
    }
  }

  export function* editProdyAsync({payload}) {
    try {

      const editedProd = yield updateMethod(payload.data,'produtos',payload.id);
      
      yield put(editProdSuccess(editedProd.produto));

      if(!editedProd.error){
        yield  Message('Produto atualizado com Sucesso !!','success'); 
      } else{
        let msg = `${editedProd.msg}  ${(editedProd.erros)?JSON.stringify(editedProd.erros):''}`
        yield Message(msg,'warning');
      }
    } catch (error) {
      yield put(editProdFailure(error.message));
      yield Message(error.message,'warning'); 
    }
  }

  export function* deleteProdyAsync({payload}){
    try {

     let resp =  yield deleteMethod('produtos',payload);
      
      yield put(deleteProdSuccess(payload));

      if(!resp.error){
        yield  Message('Produto removido com Sucesso !!','success'); 
      } else{
        let msg = `${resp.msg}  ${(resp.erros)?JSON.stringify(resp.erros):''}`

        yield Message(msg,'warning');
      }
    } catch (error) {
      yield put(deleteProdFailure(error.message));
      yield Message(error.message,'warning'); 
    }
  }

  export function* getProdStartAsync({payload}){
    try {

      let prod  = yield getByIdMethod('produto',payload);
      
      yield put(getProdSuccess(prod));
    } catch (error) {
      yield put(getProdFailure(error.message));
      yield Message(error.message,'warning'); 
    }
  }

  export function* addProdStart() {
    yield takeLatest(ProdActionTypes.ADD_PROD_START , addProdyAsync);
  }

  export function* editProdStart() {
    yield takeLatest(ProdActionTypes.EDIT_PROD_START , editProdyAsync);
  }

  export function* deleteProdStart() {
    yield takeLatest(ProdActionTypes.DELETE_PROD_START , deleteProdyAsync);
  }

  export function* getProdStart(){
    yield takeLatest(ProdActionTypes.GET_PROD_START,getProdStartAsync)
  }

export function* fetchProdAsync({payload}) {
  try {
    const prods = yield getAllMethod('produtos');
    yield put(fetchProdSuccess(prods));
  } catch (error) {
    yield put(fetchProdFailure(error.message));
  }
}


export function* fetchProdStart() {
  yield takeLatest(ProdActionTypes.FETCH_COLLECTIONS_START_PROD, fetchProdAsync);
}
  

export function* prodSagas() {
  yield all([
    call(addProdStart),
    call(fetchProdStart),
    call(deleteProdStart),
    call(getProdStart),
    call(editProdStart)
   ]);
}