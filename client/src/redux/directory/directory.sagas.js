import { takeLatest, call, put } from "redux-saga/effects";
import { getCollectionMain } from "../../utils/collection/collection.utils";
import {
  fetchCollectionSuccess,
  fetchCollectionFailure,
} from "./directory.actions";
import DirectoryActionTypes from "./directory.types";

export function* fetchCollectionStartAsync() {
  try {
    const collections = yield call(getCollectionMain);

    yield put(fetchCollectionSuccess(collections));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    DirectoryActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionStartAsync
  );
}
