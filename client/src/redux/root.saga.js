import { all, call } from "redux-saga/effects";

import { fetchCollectionStart } from "./directory/directory.sagas";
import { fetchItemsAsyncStart } from "./shop/shop.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(fetchItemsAsyncStart)]);
}
