import { CLEAR_DIALOG, SET_DIALOG } from "./constants";

const initialState = { open: false, path: "" };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DIALOG:
      return {
        ...state,
        open: true,
        path: action.path,
      };

    case CLEAR_DIALOG:
      return { ...initialState };

    default:
      return state;
  }
}
