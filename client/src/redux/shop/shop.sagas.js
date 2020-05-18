import { takeLatest, call, put } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import { getItemsMain } from "../../utils/shop/items.utils";
import { fetchItemsSucess, fetchItemsFailure } from "./shop.actions";

export function* fetchItemsAsync() {
  try {
    const items = yield call(getItemsMain);
    yield put(fetchItemsSucess(items));
  } catch (error) {
    yield put(fetchItemsFailure(error.message));
  }
}

export function* fetchItemsAsyncStart() {
  yield takeLatest(ShopActionTypes.FETCH_ITEMS_START, fetchItemsAsync);
}
