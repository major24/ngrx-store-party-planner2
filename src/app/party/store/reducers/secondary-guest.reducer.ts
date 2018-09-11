import * as guestActions from '../actions/guest.actions';

export interface SecondaryGuest {
    id: number;
    name: string;
}

export interface SecondaryGuestState {
     secondaryGuests: SecondaryGuest[];
}

export const initialStateSecondaryGuest: SecondaryGuestState = {
    secondaryGuests: []
}

export function secondaryGuestReducer(state = initialStateSecondaryGuest,
            action: guestActions.Actions): SecondaryGuestState {
        switch(action.type){
            case guestActions.ADD_SECONDARY_GUEST:
            const newAppState = Object.assign({}, state);
            const newPersonState = Object.assign([], newAppState.secondaryGuests);
            newAppState.secondaryGuests = [
                ...newPersonState, Object.assign({}, 
                     {id: action.payload.id, name: action.payload.name })
            ];
            return newAppState;

        default:
            return state;
        }
}

export interface PrimarySecondary {
    pid: number;
    sid: number;
}