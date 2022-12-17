import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "../redux/auth";
import hospital from "../redux/hospital";
import room from "../redux/room";
import patient from "../redux/patient";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({ auth, hospital, room, patient });

export default persistReducer(persistConfig, rootReducer);
