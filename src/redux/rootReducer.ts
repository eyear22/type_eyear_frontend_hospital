import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "./auth";
import hospital from "./hospital";
import room from "./room";
import patient from "./patient";
import reservation from "./reservation";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth,
  hospital,
  room,
  patient,
  reservation,
});

export default persistReducer(persistConfig, rootReducer);
