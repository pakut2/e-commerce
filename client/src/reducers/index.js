import { combineReducers } from "redux";
import { productListReducer, productDetailsReducer } from "./productReducers";
import { cartReducer } from "./cartReducers";

export default combineReducers({
  productListReducer,
  productDetailsReducer,
  cartReducer,
});
