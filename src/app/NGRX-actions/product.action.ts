import { createAction, props } from "@ngrx/store";

import { IProduct } from "../models/product.interface";


export const loadProduct = createAction(
    '[Prodcut Component] LoadProduct');

export const loadProductSuccess = createAction(
    '[Product Component] LoadProductSuccess',
     props<{products: IProduct[]}>())
    
export const loadProductFailure = createAction(
    '[Product Component] LoadProductFailure'
    , props<{errorMessage: string}>());
