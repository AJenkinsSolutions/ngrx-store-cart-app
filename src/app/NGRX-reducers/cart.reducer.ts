import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../models/product.interface";
import * as CartActions from '../NGRX-actions/cart.action'

//The responsbility of the 'REDUCERS' is to maintain & manipulate the state of a variable

//The Var which the recuder will be maintaining
export interface CartState {
    products: IProduct[];
    //This question mark means nullable
    totalPrice?: number;
}

//Initalize the state
//1. Implementing the CartState
//2. Assigning the value of zero to the count property
export const initalCartState: CartState = {
    products: []
}


//Create the Reducer
//param1: ^ Intial state ^
//method1- on(param1): The action we created and want to use 
export const cartReducer = createReducer(
    initalCartState,
    //param1: Previous state & the 'PROPS' we need to pass through it
    //param2: Specifiy which var will be manipulated
    //Based on the previoius state , add 1 to the count
    on(CartActions.addToCart, (state, { product }) => {
        //Step 1 - 
        //param1: 
        //Use array destructuring to add the products to the states product array 
        //"Spread Operator ..." we use this to create a copy of the current state to prop immutability
        //param2: props product. this is the object we want to add to our state array
        const updatedProduct = [...state.products, product];
        // step 2-
        //Rtn Obj1: new state, which is created by copying the exisiting state. (imutibility)
        //retn the property we want to overwrite 
        return {
            ...state,
            products: updatedProduct
        }

    }),

    //UPDATE
    on(CartActions.incrementProductCount, (state, { productId } ) => {
        console.log(state)
        console.log(productId)
        //the map method returns find the object with the correct id, then we are incrementing its qauntity property
        const updatedProducts = state.products.map((product) => 
            product.id === productId 
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return {
            ...state,
            products: updatedProducts,
        };


    }),
    //UPDATE
    on(CartActions.decrementProductCount, (state, { productId } ) => {
        console.log(state)
        console.log(productId)
        //the map method returns find the object with the correct id, then we are incrementing its qauntity property
        const updatedProducts = state.products.map((product) => 
            product.id === productId 
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
        return {
            ...state,
            products: updatedProducts,
        };


    }),
    //DELETE
    on(CartActions.removeItem, (state, { productId }) => {
        //T his call back func filters through the array add removes the product with the corrsponding ID
        const updatedProducts = state.products.filter((product) => product.id === productId)

        return {
            ...state,
            products: updatedProducts,
        }

    })


    
    
);

