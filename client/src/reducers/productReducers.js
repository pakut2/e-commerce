import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

const initialState = {
  products: [],
  loading: true,
  error: {},
};

export const productListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_LIST_REQUEST:
      return {
        products: [],
        loading: true,
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        products: payload,
        loading: false,
      };
    case PRODUCT_LIST_FAIL:
      return {
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
