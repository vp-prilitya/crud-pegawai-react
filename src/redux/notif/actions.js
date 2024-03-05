import { CLEAR_NOTIF, SET_NOTIF } from "./constants";

export function setNotif(open, message) {
  return {
    type: SET_NOTIF,
    open,
    message,
  };
}

export function clearNotif() {
  return {
    type: CLEAR_NOTIF,
  };
}
