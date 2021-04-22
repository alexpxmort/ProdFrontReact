import {createSelector} from 'reselect'

const selectProd = state =>state.prod;

export const selectProdutos = createSelector(
    [selectProd],
    prod => prod.prods
)

export const selectSuccess = createSelector(
    [selectProd],
    prod => prod.success
)

export const selectProds = createSelector(
    [selectProd],
    prod => prod.prods
)

export const selectProdById = createSelector(
    [selectProd],
    prod => prod.prod
)

export const selectIsFetching = createSelector(
    [selectProd],
    prod => prod.isFetching
)

