import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounterDashboardComponent } from './counter-dashboard/counter-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CounterDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterRoutingModule { }
