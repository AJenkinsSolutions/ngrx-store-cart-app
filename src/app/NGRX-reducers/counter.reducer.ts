import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "../NGRX-actions/counter.action";
//The responsbility of the 'REDUCERS' is to maintain & manipulate the state of a variable

//The Var which the recuder will be maintaining
export interface CounterState {
    count: number;
}

//Initalize the state
//1. Implementing the CounterState
//2. Assigning the value of zero to the count property
export const initalCounterState: CounterState = {
    count : 0
}


//Create the Reducer
//param1: ^ Intial state ^
//method1- on(param1): The action we created and want to use 
export const counterReducer = createReducer(
    initalCounterState,
    //param1: Previous state
    //param2: Specifiy which var will be manipulated
    //Based on the previoius state , add 1 to the count
    on(increment, state => ({...state, count: state.count + 1 })),
    //Based on the previoius state , minsus 1 to the count
    on(decrement, state => ({...state, count: state.count - 1 })),
    //Based on the previoius state , set count to zero   
    on(reset, state => ({...state, count: 0 }))
    
    
);

