import { createAction } from "@ngrx/store";


//param1: Name of component the action belongs to.
//param2: Name of action
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component]  Decrement');
export const reset = createAction('[Counter Component]  Reset');