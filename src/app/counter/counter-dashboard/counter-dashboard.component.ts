import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CounterState }  from '../store/reducers/counter.reducer';
import * as CounterActions  from '../store/actions/counter.action';

@Component({
  selector: 'app-counter-dashboard',
  templateUrl: './counter-dashboard.component.html',
  styleUrls: ['./counter-dashboard.component.css']
})
export class CounterDashboardComponent implements OnInit {

  counter: Observable<CounterState>;
  counterValue: number;
  desc: string = '';

  constructor(private store: Store<CounterState>) { 
    this.counter = store.pipe(select('counter'));
    this.counter.subscribe((x) => {
      //console.log(x.counter);
      this.counterValue = x.counter;
      this.desc = x.desc;
    });
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(new CounterActions.Increment());
    //this.store.dispatch({ type: CounterActions.INCREMENT });
  }

  decrement() {
    this.store.dispatch(new CounterActions.Decrement());
  }

  reset() {
    this.store.dispatch(new CounterActions.Reset(0));
  }

}
