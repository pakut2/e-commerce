import { combineReducers } from "redux";
import { productListReducer, productDetailsReducer } from "./productReducers";

export default combineReducers({
  productListReducer,
  productDetailsReducer,
});
