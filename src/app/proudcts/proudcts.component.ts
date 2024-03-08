import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-proudcts',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './proudcts.component.html',
  styleUrl: './proudcts.component.scss'
})
export class ProudctsComponent {
  
  // Add HttpClient Object
  //* We add the HttpClientModule in the providers Array in the app.config
  http = inject(HttpClient);

  //https://fakestoreapi.com/docs * Using this website to mock the api*
  baseUrl: string = 'https://fakestoreapi.com/';
  productsEndpoint: string = 'products';
  products$ = this.http.get(this.baseUrl + this.productsEndpoint);



 

  constructor(){}

}
