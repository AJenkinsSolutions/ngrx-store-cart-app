import { CartState } from "../NGRX-reducers/cart.reducer";
import { CounterState } from "../NGRX-reducers/counter.reducer";
import { ProductState } from "../NGRX-reducers/product.reducer";

//This is our "Global State" interface
export interface AppState {

    //Add the states we want to maintain
    counter: CounterState
    //This is where all our states will live 
    // cart: CartState
    // ammo: AmmoState


    cart: CartState



    product: ProductState
    
} 