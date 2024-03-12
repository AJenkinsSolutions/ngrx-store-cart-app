import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "../NGRX-reducers/product.reducer";


//Using the feature syntax
//A more concise way of selecting the slice of state we want
export const selectProductFeature = createFeatureSelector<ProductState>('product');


export const selectAllProducts = createSelector(
    selectProductFeature,
     (state: ProductState) => state.products)


export const selectProductError= createSelector(
selectProductFeature,
(state: ProductState) => state.error)









