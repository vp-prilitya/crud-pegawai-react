import { CLEAR_DIALOG, SET_DIALOG } from "./constants";

export function openDialog(path) {
  return {
    type: SET_DIALOG,
    path,
  };
}

export function closeDialog() {
  return {
    type: CLEAR_DIALOG,
  };
}
