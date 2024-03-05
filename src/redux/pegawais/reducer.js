import {
  START_FETCHING_PEGAWAI,
  SUCCESS_FETCHING_PEGAWAI,
  ERROR_FETCHING_PEGAWAI,
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
    case START_FETCHING_PEGAWAI:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_PEGAWAI:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_PEGAWAI:
      return {
        ...state,
        status: statuslist.success,
        data: action.pegawai,
      };

    default:
      return state;
  }
}
