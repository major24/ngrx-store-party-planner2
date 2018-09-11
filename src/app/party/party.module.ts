import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartyRoutingModule } from './party-routing.module';
import { PartyComponent } from './party/party.component';
import { StoreModule } from '@ngrx/store';  

import * as fromReducer  from './store/reducers/index.reducer';
import { PrimaryGuestComponent } from './primary-guest/primary-guest.component';
import { SecondaryGuestComponent } from './secondary-guest/secondary-guest.component'; 

@NgModule({
  imports: [
    CommonModule,
    PartyRoutingModule,
    StoreModule.forFeature(
            'party', fromReducer.partyReducers
        )
  ],
  declarations: [PartyComponent, PrimaryGuestComponent, SecondaryGuestComponent],
  providers: []
})
export class PartyModule { }
