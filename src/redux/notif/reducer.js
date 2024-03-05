import { CLEAR_NOTIF, SET_NOTIF } from "./constants";

let initialState = { open: false, message: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIF:
      return {
        ...state,
        open: action.open,
        message: action.message,
      };

    case CLEAR_NOTIF:
      return { state: initialState };

    default:
      return state;
  }
}
