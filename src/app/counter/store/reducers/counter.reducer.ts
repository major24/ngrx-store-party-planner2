// reducer
import * as CounterActions  from '../actions/counter.action'

export interface CounterState {  
    counter: number;
    desc: string;
}

export const initialState: CounterState = {  
    counter: 0,
    desc: "..."
};

export function counterReducer(state: CounterState = initialState, 
                action: CounterActions.CounterActionUnion): CounterState {
  switch (action.type) {
    case CounterActions.INCREMENT:
        return { counter: state.counter + 1, desc: "adding..." };

    case CounterActions.DECREMENT:
        return { counter: state.counter - 1, desc: "subtracting..." };

    case CounterActions.RESET:
      return { counter: 0, desc: "reseting..." };

    default:
      return state;
  }
}
