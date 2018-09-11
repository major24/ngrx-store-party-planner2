import * as allPrimary from './primary-guest.reducer';
import * as allSecondary from './secondary-guest.reducer';

import { ActionReducer, combineReducers } from "@ngrx/store";

export interface PartyAppState {
    primaryGuest: allPrimary.PrimaryGuestState;
    secondaryGuest: allSecondary.SecondaryGuestState;
}

export const partyReducers = {
    primaryGuest: allPrimary.primaryGuestReducer,
    secondaryGuest: allSecondary.secondaryGuestReducer
}
