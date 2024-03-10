import { createSelector } from "@ngrx/store";
import { AppState } from "../NGRX-states/app.state";
import { State } from "@ngrx/store";
import { CartState } from "../NGRX-reducers/cart.reducer";

//init cart state  
export const selectCartState = (state: AppState) => state.cart;

// Now we 'select' the property we want from the state 
export const seletctCartProducts = createSelector(
    selectCartState, (state: CartState) => state.products
)

export const selectTotalPrice = createSelector(
    selectCartState, (state: CartState) => state.totalPrice
)