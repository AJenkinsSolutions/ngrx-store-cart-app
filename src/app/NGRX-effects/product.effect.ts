import { Injectable, inject } from "@angular/core";
import { ProductApiService } from "../shared/service/product-api.service";
//From effects
import { Actions,createEffect, ofType } from "@ngrx/effects";
import * as ProductActions from '../NGRX-actions/product.action';
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class ProductEffect  {

    private apiService = inject(ProductApiService)
    //Helps loads the ap
    action$ = inject(Actions);

    //Rxjs syntax
    //Using switchMaps to intercept the API
    //we can trigger the success action or failure depending on the result of 
    loadProducts$ = createEffect(()=> 
        this.action$.pipe(
                ofType(ProductActions.loadProduct),
                    switchMap(() =>
                        this.apiService.getProducts().pipe(
                                map((res) => ProductActions.loadProductSuccess({products: res})),
                                    catchError((error: { message: string }) => 
                                        of(
                                            ProductActions.loadProductFailure({
                                                errorMessage: 'Failed to load products',
                                            }))

                                )
                            )
        
    ))
    )
}