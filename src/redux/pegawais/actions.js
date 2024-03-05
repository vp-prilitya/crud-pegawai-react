import {
  START_FETCHING_PEGAWAI,
  SUCCESS_FETCHING_PEGAWAI,
  ERROR_FETCHING_PEGAWAI,
} from "./constants";

import { getData } from "../../utils/fetch";
import debounce from "debounce-promise";

let debouncedFetchPegawai = debounce(getData, 1000);

// START
export const startFetchingPegawai = () => {
  return {
    type: START_FETCHING_PEGAWAI,
  };
};

// SUCCESS
export const successFetchingPegawai = ({ pegawai }) => {
  return {
    type: SUCCESS_FETCHING_PEGAWAI,
    pegawai,
  };
};

export const errorFetchingPegawai = () => {
  return {
    type: ERROR_FETCHING_PEGAWAI,
  };
};

export const fetchPegawai = () => {
  return async (dispatch) => {
    dispatch(startFetchingPegawai());

    try {
      let res = await debouncedFetchPegawai("/pegawai");

      dispatch(
        successFetchingPegawai({
          pegawai: res.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingPegawai());
    }
  };
};
