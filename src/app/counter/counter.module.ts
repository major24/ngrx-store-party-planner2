import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterDashboardComponent } from './counter-dashboard/counter-dashboard.component';
import { StoreModule } from '@ngrx/store';  

import { counterReducer } from './store/reducers/counter.reducer'; 

@NgModule({
  imports: [
    CommonModule,
    CounterRoutingModule,
        StoreModule.forFeature(
              'counter', counterReducer
            )

  ],
  declarations: [CounterDashboardComponent],
  providers: []
})
export class CounterModule { }

    /*StoreModule.forFeature('counterF', {
              counter: counter
            })*/