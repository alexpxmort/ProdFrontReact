    /**
 * Actions que serão usadas
 * 
 */
    

import { ProdActionTypes } from "../../types";

export const addProdStart =(prod)=> ({
    type:ProdActionTypes.ADD_PROD_START,
    payload:prod
})

export const addProdSuccess =(prod)=> ({
    type:ProdActionTypes.ADD_PROD_SUCCESS,
    payload:prod
})

export const addProdFailure =(err)=> ({
    type:ProdActionTypes.ADD_PROD_FAILURE,
    payload:err
})



export const editProdStart = (payload)=> ({
    type:ProdActionTypes.EDIT_PROD_START,
    payload:payload
})

export const editProdSuccess = (prod)=> ({
    type:ProdActionTypes.EDIT_PROD_SUCCESS,
    payload:prod
})

export const editProdFailure =(err)=> ({
    type:ProdActionTypes.EDIT_PROD_FAILURE,
    payload:err
})


export const fetchProdStart =(payload)=> ({
    type:ProdActionTypes.FETCH_COLLECTIONS_START_PROD,
    payload:payload
})

export const fetchProdSuccess =(prods)=> ({
    type:ProdActionTypes.FETCH_COLLECTIONS_SUCCESS_PROD,
    payload:prods
})

export const fetchProdFailure =(err)=> ({
    type:ProdActionTypes.FETCH_COLLECTIONS_FAILURE_PROD,
    payload:err
})


export const deleteProdStart = (payload)=> ({
    type:ProdActionTypes.DELETE_PROD_START,
    payload:payload
})

export const deleteProdSuccess = (prod)=> ({
    type:ProdActionTypes.DELETE_PROD_SUCCESS,
    payload:prod
})

export const deleteProdFailure = (err)=> ({
    type:ProdActionTypes.DELETE_PROD_FAILURE,
    payload:err
})

export const getProdStart = (payload)=> ({
    type:ProdActionTypes.GET_PROD_START,
    payload:payload
})

export const getProdSuccess = (prod)=> ({
    type:ProdActionTypes.GET_PROD_SUCCESS,
    payload:prod
})

export const getProdFailure = (err)=> ({
    type:ProdActionTypes.GET_PROD_FAILURE,
    payload:err
})