import { Component } from '@angular/core';
import { AppState } from '../../NGRX-states/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  constructor(private store: Store<AppState>){}

}
