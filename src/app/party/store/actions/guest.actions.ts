//Person Action Constants
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { PrimaryGuest } from '../reducers/primary-guest.reducer';
import { SecondaryGuest } from '../reducers/secondary-guest.reducer';
export const ADD_PRIMARY_GUEST = 'ADD_PRIMARY_GUEST';
export const REMOVE_PRIMARY_GUEST = 'REMOVE_PRIMARY_GUEST';
export const ADD_SECONDARY_GUEST = 'ADD_SECONDARY_GUEST';
export const REMOVE_SECONDARY_GUEST = 'REMOVE_SECONDARY_GUEST';
export const ADD_SECONDARY_GUEST_TO_PRIMARY = 'ADD_SECONDARY_GUEST_TO_PRIMARY';
export const REMOVE_SECONDARY_GUEST_FROM_PRIMARY = 'REMOVE_SECONDARY_GUEST_FROM_PRIMARY';
export const TOGGLE_ATTENDING = 'TOGGLE_ATTENDING';
import { PrimarySecondary } from '../reducers/secondary-guest.reducer';


export class AddPrimaryGuest implements Action {
    readonly type = ADD_PRIMARY_GUEST;
    constructor(public payload: PrimaryGuest){
        console.log(`action-AddPrimary-class-ctor`);
    }
}

export class RemovePrimaryGuest implements Action {
    readonly type = REMOVE_PRIMARY_GUEST;
    constructor(public payload: number){
        console.log(`action-RemovePrimary-class-ctor`);
    }
}

export class AddSecondaryGuest implements Action {
    readonly type = ADD_SECONDARY_GUEST;
    constructor(public payload: SecondaryGuest){
        console.log(`action-AddSecondryGuest-class-ctor`);
    }
}

export class RemoveSecondaryGuest implements Action {
    readonly type = REMOVE_SECONDARY_GUEST;
    constructor(public payload: number){
        console.log(`action-RemoveSecondaryGuest-class-ctor`);
    }
}

export class AddSecondaryGuestToPrimary implements Action {
    readonly type = ADD_SECONDARY_GUEST_TO_PRIMARY;
    constructor(public payload: PrimarySecondary){
        console.log(`action-AddSecondaryToPrimry-class-ctor`);
    }
}

export class RemoveSecondaryGuestFromPrimary implements Action {
    readonly type = REMOVE_SECONDARY_GUEST_FROM_PRIMARY;
    constructor(public payload: PrimarySecondary){
        console.log(`action-RemoveSecondaryFromPrimry-class-ctor`);
    }
}

export type Actions = AddPrimaryGuest
                    | RemovePrimaryGuest
                    | AddSecondaryGuest
                    | RemoveSecondaryGuest
                    | AddSecondaryGuestToPrimary
                    | RemoveSecondaryGuestFromPrimary;


