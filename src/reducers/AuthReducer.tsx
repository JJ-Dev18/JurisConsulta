import { AnyAction } from "redux";
import { types } from "../types/types";

// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0
}

export const authReducer = (state= initialState, action:AnyAction) => {
  //  console.log(action.payload)
  switch (action.type) {
    case types.login:
      return {
        uid: action.uid,
        name: action.displayName,
        photoURL: action.payload.photoURL,
      };

    case types.loggout:
      return {};
    default:
      return state;
  }
};
