import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  
  // Add HttpClient Object
  //* We add the HttpClientModule in the providers Array in the app.config
  http = inject(HttpClient);

  //https://fakestoreapi.com/docs * Using this website to mock the api*
  baseUrl: string = 'https://fakestoreapi.com/';
  productsEndpoint: string = 'products';
  //define the return
  products$ = this.http.get(this.baseUrl + this.productsEndpoint) as Observable<any[]>;

  constructor(){}

}