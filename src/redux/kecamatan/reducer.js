import {
  START_FETCHING_KECAMATAN,
  SUCCESS_FETCHING_KECAMATAN,
  ERROR_FETCHING_KECAMATAN,
  CLEAR_FETCHING_KECAMATAN,
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
    case START_FETCHING_KECAMATAN:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_KECAMATAN:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_KECAMATAN:
      return {
        ...state,
        status: statuslist.success,
        data: action.kecamatan,
      };

    case CLEAR_FETCHING_KECAMATAN:
      return { ...initialState };

    default:
      return state;
  }
}
