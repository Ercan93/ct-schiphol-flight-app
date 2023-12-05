import { combineReducers } from "redux";
import appReducer from "./utils/redux/appReducer";

const rootReducer = combineReducers({
  app: appReducer
})

export default rootReducer;