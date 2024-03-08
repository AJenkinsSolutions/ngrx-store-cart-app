import { CounterState } from "../NGRX-reducers/counter.reducer";

//This is our "Global State" interface
export interface AppState {

    //Add the states we want to maintain
    counter: CounterState
    //This is where all our states will live 
    // cart: CartState
    // ammo: AmmoState
    
} 