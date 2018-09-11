import * as guestActions from '../actions/guest.actions';

export interface PrimaryGuest {
    id: number;
    name: string;
    guestIds?: number[];
}

export interface PrimaryGuestState {
     primaryGuests: PrimaryGuest[];
}

export const initialStatePrimaryGuest: PrimaryGuestState = {
    primaryGuests: []
}

export function primaryGuestReducer(state: PrimaryGuestState = initialStatePrimaryGuest,
            action: guestActions.Actions): PrimaryGuestState {
        switch(action.type){
            case guestActions.ADD_PRIMARY_GUEST:
            const newAppState = Object.assign({}, state);
            const newPersonState = Object.assign([], newAppState.primaryGuests);
            newAppState.primaryGuests = [
                ...newPersonState, Object.assign({}, 
                     {id: action.payload.id, name: action.payload.name, guestIds: [] })
            ];
            return newAppState;

            // add secondary to primary
            case guestActions.ADD_SECONDARY_GUEST_TO_PRIMARY:
                const currStateAddScnd = Object.assign({}, state);
                const newPersonStateAddScnd = Object.assign([], currStateAddScnd.primaryGuests);
                const priGuests = newPersonStateAddScnd.map((v) => {
                    if (v.id === action.payload.pid){
                        return Object.assign({}, v, { guestIds: 
                                [...v.guestIds, action.payload.sid]
                            });
                    }
                    return v;
                });
     
                const currStateAddScnd2 = Object.assign({}, state, {primaryGuests: priGuests});
                return currStateAddScnd2;
            
            case guestActions.REMOVE_SECONDARY_GUEST_FROM_PRIMARY:
                const currStateRmvScnd = Object.assign({}, state);
                const newPersonStateRmvScnd = Object.assign([], currStateRmvScnd.primaryGuests);
                const priGuestsRmv = newPersonStateRmvScnd.map((v) => {
                    if (v.id === action.payload.pid){
                        const ns = v.guestIds.filter(s => s !== action.payload.sid);
                        return Object.assign({}, v, {guestIds: ns});
                    }
                    return v;
                });

                const currStateAddScnd3 = Object.assign({}, state, {primaryGuests: priGuestsRmv});
                return currStateAddScnd3;


            default:
                return state;
        }
}

