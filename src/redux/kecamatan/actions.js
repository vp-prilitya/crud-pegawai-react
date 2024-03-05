import {
  START_FETCHING_KECAMATAN,
  SUCCESS_FETCHING_KECAMATAN,
  ERROR_FETCHING_KECAMATAN,
  CLEAR_FETCHING_KECAMATAN,
} from "./constants";

import { getDataWilayah } from "../../utils/fetch";
import debounce from "debounce-promise";

let debouncedFetchKecamatan = debounce(getDataWilayah, 0);

// START
export const startFetchingKecamatan = () => {
  return {
    type: START_FETCHING_KECAMATAN,
  };
};

// SUCCESS
export const successFetchingKecamatan = ({ kecamatan }) => {
  return {
    type: SUCCESS_FETCHING_KECAMATAN,
    kecamatan,
  };
};

export const errorFetchingKecamatan = () => {
  return {
    type: ERROR_FETCHING_KECAMATAN,
  };
};

export const clearFetchingKecamatan = () => {
  return {
    type: CLEAR_FETCHING_KECAMATAN,
  };
};

export const fetchKecamatan = (id) => {
  return async (dispatch) => {
    dispatch(startFetchingKecamatan());

    try {
      let res = await debouncedFetchKecamatan(`/districts/${id}.json`);

      dispatch(
        successFetchingKecamatan({
          kecamatan: res.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingKecamatan());
    }
  };
};
