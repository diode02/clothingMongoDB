import ShopActionTypes from "./shop.types";

export const fetchItemsStart = () => ({
  type: ShopActionTypes.FETCH_ITEMS_START,
});

export const fetchItemsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_ITEMS_FAILURE,
  payload: errorMessage,
});

export const fetchItemsSucess = (items) => ({
  type: ShopActionTypes.FETCH_ITEMS_SUCCESS,
  payload: items,
});
