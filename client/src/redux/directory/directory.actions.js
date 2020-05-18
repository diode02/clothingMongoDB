import DirectoryActionTypes from "./directory.types";

export const fetchCollectionStart = () => ({
  type: DirectoryActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collections) => ({
  type: DirectoryActionTypes.FETCH_COLLECTIONS_SUCESS,
  payload: collections,
});

export const fetchCollectionFailure = (errorMessage) => ({
  type: DirectoryActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
