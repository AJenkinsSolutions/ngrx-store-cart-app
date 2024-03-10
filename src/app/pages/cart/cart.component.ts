import { Component } from '@angular/core';
import { AppState } from '../../NGRX-states/app.state';
import { Store } from '@ngrx/store';
import { seletctCartProducts } from '../../NGRX-selectors/cart.selector';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product.interface';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  //Now we can use this data in the cart HTML
  cartItems$: Observable<IProduct[]> = this.store.select(seletctCartProducts)

  constructor(private store: Store<AppState>){}

}
