import { createSelector } from "@ngrx/store";
import { AppState } from "../NGRX-states/app.state";
import { stat } from "fs";
//Selector function like reposotires in the MVC Pattern 



//Gets the state from the AppState / Global store / Store / DB
export const selectCounterState = (state: AppState) => state.counter;
    //Gets the counter value from the state
    



//Now we need to expose the data to the components that want the values from the state
//Param1: indicate which state you are using
//Param2: from the state , can you grab the count variable 
export const selectCount = createSelector(
    selectCounterState, (state)=> state.count

);