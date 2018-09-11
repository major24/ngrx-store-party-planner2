import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartyComponent } from './party/party.component';
import { SecondaryGuestComponent } from "./secondary-guest/secondary-guest.component";

const routes: Routes = [
  {
    path: '',
    component: PartyComponent
  },
  {
    path: 'add-secondary-guest/:primaryGuestId',
    component: SecondaryGuestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartyRoutingModule { }
