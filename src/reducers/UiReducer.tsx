import {AnyAction} from 'redux';
import {types} from '../types/types';

// Define a type for the slice state
interface CounterState {
  darkTheme: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  darkTheme: false,
};

export const UiReducer = (state = initialState, action: AnyAction) => {
  //  console.log(action.payload)
  switch (action.type) {
    case types.theme:
      return {
       darkTheme: !state.darkTheme
      };

    default:
      return state;
  }
};
