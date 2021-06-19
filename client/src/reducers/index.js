import { combineReducers } from "redux";
import { productListReducer, productDetailsReducer } from "./productReducers";
import { cartReducer } from "./cartReducers";
import { userLoginReducer } from "./userReducers";

export default combineReducers({
  productListReducer,
  productDetailsReducer,
  cartReducer,
  userLoginReducer,
});
