import { createAction, props } from "@ngrx/store";

import { IProduct } from "../models/product.interface";



//param1: Name of component the action belongs to.
//param2: Name of action
//param3: Name of props AKA property, props is also a method ()
export const addToCart = createAction('[Cart Component] addToCart', props<{product: IProduct}>());
// export const removeFromCart = createAction('[Cart Component] removeFromCart')


//Well use the id instead of the whole object for increment & decrement
export const incrementProductCount = createAction('[Cart Component] incrementProductCount', props<{productId: number}>());

export const decrementProductCount = createAction('[Cart Component] decrementProductCount', props<{productId: number}>());