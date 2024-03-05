import {
  START_FETCHING_PROVINSI,
  SUCCESS_FETCHING_PROVINSI,
  ERROR_FETCHING_PROVINSI,
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
    case START_FETCHING_PROVINSI:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_PROVINSI:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_PROVINSI:
      return {
        ...state,
        status: statuslist.success,
        data: action.provinsi,
      };

    default:
      return state;
  }
}
