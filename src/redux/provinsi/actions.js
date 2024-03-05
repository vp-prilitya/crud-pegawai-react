import {
  START_FETCHING_PROVINSI,
  SUCCESS_FETCHING_PROVINSI,
  ERROR_FETCHING_PROVINSI,
} from "./constants";

import { getDataWilayah } from "../../utils/fetch";
import debounce from "debounce-promise";

let debouncedFetchProvinsi = debounce(getDataWilayah, 0);

// START
export const startFetchingProvinsi = () => {
  return {
    type: START_FETCHING_PROVINSI,
  };
};

// SUCCESS
export const successFetchingProvinsi = ({ provinsi }) => {
  return {
    type: SUCCESS_FETCHING_PROVINSI,
    provinsi,
  };
};

export const errorFetchingProvinsi = () => {
  return {
    type: ERROR_FETCHING_PROVINSI,
  };
};

export const fetchProvinsi = () => {
  return async (dispatch) => {
    dispatch(startFetchingProvinsi());

    try {
      let res = await debouncedFetchProvinsi("/provinces.json");

      dispatch(
        successFetchingProvinsi({
          provinsi: res.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingProvinsi());
    }
  };
};
