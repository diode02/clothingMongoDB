import { all, call } from "redux-saga/effects";

import { fetchCollectionStart } from "./directory/directory.sagas";
import { fetchItemsAsyncStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([
    call(fetchCollectionStart),
    call(fetchItemsAsyncStart),
    call(userSagas),
  ]);
}
