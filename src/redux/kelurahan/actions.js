import {
  START_FETCHING_KELURAHAN,
  SUCCESS_FETCHING_KELURAHAN,
  ERROR_FETCHING_KELURAHAN,
  CLEAR_FETCHING_KELURAHAN,
} from "./constants";

import { getDataWilayah } from "../../utils/fetch";
import debounce from "debounce-promise";

let debouncedFetchKelurahan = debounce(getDataWilayah, 0);

// START
export const startFetchingKelurahan = () => {
  return {
    type: START_FETCHING_KELURAHAN,
  };
};

// SUCCESS
export const successFetchingKelurahan = ({ kelurahan }) => {
  return {
    type: SUCCESS_FETCHING_KELURAHAN,
    kelurahan,
  };
};

export const errorFetchingKelurahan = () => {
  return {
    type: ERROR_FETCHING_KELURAHAN,
  };
};

export const clearFetchingKelurahan = () => {
  return {
    type: CLEAR_FETCHING_KELURAHAN,
  };
};

export const fetchKelurahan = (id) => {
  return async (dispatch) => {
    dispatch(startFetchingKelurahan());

    try {
      let res = await debouncedFetchKelurahan(`/villages/${id}.json`);

      dispatch(
        successFetchingKelurahan({
          kelurahan: res.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingKelurahan());
    }
  };
};
