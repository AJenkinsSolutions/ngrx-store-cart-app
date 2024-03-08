import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../NGRX-states/app.state';
import { selectCount } from '../NGRX-selectors/counter.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  //Count state variable
  count$: Observable<number>;

  //Initalize our Global store
  constructor(private store: Store<AppState>){
    //Now we can initalize the count$ from the store
    this.count$ = this.store.select(selectCount);
  }

}
