import { Injectable, inject } from "@angular/core";
import { ProductApiService } from "../shared/service/product-api.service";

@Injectable()
export class ProductEffect  {

    private api = inject(ProductApiService)

}