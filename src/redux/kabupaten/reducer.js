import {
  START_FETCHING_KABUPATEN,
  SUCCESS_FETCHING_KABUPATEN,
  ERROR_FETCHING_KABUPATEN,
  CLEAR_FETCHING_KABUPATEN,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  status: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_KABUPATEN:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_KABUPATEN:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_KABUPATEN:
      return {
        ...state,
        status: statuslist.success,
        data: action.kabupaten,
      };
    case CLEAR_FETCHING_KABUPATEN:
      return { ...initialState };
    default:
      return state;
  }
}
