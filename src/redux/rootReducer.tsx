import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "../redux/auth";
import hospital from "../redux/hospital";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({ auth, hospital });

export default persistReducer(persistConfig, rootReducer);
