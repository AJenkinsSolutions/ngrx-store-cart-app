
import { on, createReducer } from "@ngrx/store";
import { IProduct } from "../models/product.interface";

import * as ProductActions from '../NGRX-actions/product.action'

export interface ProductState {

    products: IProduct[];

    error: string | null

}


export const initalProductState: ProductState = {

    products: [],
    error : null

} 

export const productReducer = createReducer(
    initalProductState,

    on(ProductActions.loadProductSuccess, (state, {products}) => ({
        ...state,
        products, 
        error: null
 
    })),
    on(ProductActions.loadProductFailure, (state, {errorMessage}) => ({
        ...state,
        error: errorMessage
 
    }))
    
    

)

