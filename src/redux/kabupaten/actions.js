import {
  START_FETCHING_KABUPATEN,
  SUCCESS_FETCHING_KABUPATEN,
  ERROR_FETCHING_KABUPATEN,
  CLEAR_FETCHING_KABUPATEN,
} from "./constants";

import { getDataWilayah } from "../../utils/fetch";
import debounce from "debounce-promise";

let debouncedFetchKabupaten = debounce(getDataWilayah, 0);

// START
export const startFetchingKabupaten = () => {
  return {
    type: START_FETCHING_KABUPATEN,
  };
};

// SUCCESS
export const successFetchingKabupaten = ({ kabupaten }) => {
  return {
    type: SUCCESS_FETCHING_KABUPATEN,
    kabupaten,
  };
};

export const errorFetchingKabupaten = () => {
  return {
    type: ERROR_FETCHING_KABUPATEN,
  };
};

export const clearFetchingKabupaten = () => {
  return {
    type: CLEAR_FETCHING_KABUPATEN,
  };
};

export const fetchKabupaten = (id) => {
  return async (dispatch) => {
    dispatch(startFetchingKabupaten());

    try {
      let res = await debouncedFetchKabupaten(`/regencies/${id}.json`);

      dispatch(
        successFetchingKabupaten({
          kabupaten: res.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingKabupaten());
    }
  };
};
