import {
  START_FETCHING_KELURAHAN,
  SUCCESS_FETCHING_KELURAHAN,
  ERROR_FETCHING_KELURAHAN,
  CLEAR_FETCHING_KELURAHAN,
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
    case START_FETCHING_KELURAHAN:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_KELURAHAN:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_KELURAHAN:
      return {
        ...state,
        status: statuslist.success,
        data: action.kelurahan,
      };
    case CLEAR_FETCHING_KELURAHAN:
      return { ...initialState };

    default:
      return state;
  }
}
