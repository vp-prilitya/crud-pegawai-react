import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";

import pegawaiReducer from "./pegawais/reducer";
import provinsiReducer from "./provinsi/reducer";
import kabupatenReducer from "./kabupaten/reducer";
import kecamatanReducer from "./kecamatan/reducer";
import kelurahanReducer from "./kelurahan/reducer";
import notifReducer from "./notif/reducer";
import dialogReducer from "./dialog/reducer";

import { thunk } from "redux-thunk";

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  pegawai: pegawaiReducer,
  provinsi: provinsiReducer,
  kabupaten: kabupatenReducer,
  kecamatan: kecamatanReducer,
  kelurahan: kelurahanReducer,
  notif: notifReducer,
  dialog: dialogReducer,
});

const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);

export default store;
