import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../NGRX-states/app.state";
import { ProductState } from "../NGRX-reducers/product.reducer";


//Using the feature syntax 
export const selectProductFeature = createFeatureSelector<ProductState>('product');


export const selectProductList = createSelector(
    selectProductFeature,
     (state: ProductState) => state.products)


export const selectProductError= createSelector(
selectProductFeature,
(state: ProductState) => state.error)









