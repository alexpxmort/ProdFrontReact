
    /**
 *Reducer de Produto
 * 
 */
    

import { ProdActionTypes } from "../types";


const INITIAL_STATE = {
    prods: [],
    isFetching:false,
    errorMessage:undefined,
    success:false,
    prod:null
}

const prodReducer = (state = INITIAL_STATE , action)=>{
    switch(action.type){

        case ProdActionTypes.ADD_PROD_SUCCESS:
            return {...state,
                isFetching:false,
                prods: [...state.prods, action.payload],
                success:true
            }
        break;

    case ProdActionTypes.EDIT_PROD_SUCCESS:
        return {...state,
            isFetching:false,
            prod:action.payload,
            success:true
        }
    break;

    case ProdActionTypes.DELETE_PROD_SUCCESS:
        return{
            ...state,
            prods: state.prods.filter(({id})=> id!=action.payload),
            isFetching:false,
            success:true
        }
    break;

    case ProdActionTypes.DELETE_PROD_START:
        return {
            ...state,
            isFetching:false,
            success:false,
            errorMessage:undefined
        }
        break;

    case ProdActionTypes.ADD_PROD_START:
    case ProdActionTypes.FETCH_COLLECTIONS_START_PROD:
    case ProdActionTypes.GET_PROD_START:
    case ProdActionTypes.EDIT_PROD_START:
    return {
        ...state,
        isFetching:true,
        success:false,
        errorMessage:undefined
    }
    break;

    case ProdActionTypes.FETCH_COLLECTIONS_SUCCESS_PROD:
        return {...state,prods:action.payload,isFetching:false,success:true}
    break;

    case ProdActionTypes.GET_PROD_SUCCESS:
        return {...state,prod:action.payload,isFetching:false,success:true}
    break;

    case ProdActionTypes.ADD_PROD_FAILURE:
    case ProdActionTypes.FETCH_COLLECTIONS_FAILURE_PROD:
    case ProdActionTypes.DELETE_PROD_FAILURE:
    case ProdActionTypes.GET_PROD_FAILURE:
    case ProdActionTypes.EDIT_PROD_FAILURE:
        return {...state,
            isFetching:false,
            errorMessage:action.payload,
            success:false
        }
        break;   
    
        default:
            return state;
    }
}
export default prodReducer;