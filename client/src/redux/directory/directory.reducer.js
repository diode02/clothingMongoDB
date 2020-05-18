import DirectoryActionTypes from "./directory.types";

const INITIAL_STATE = {
  collections: [],
  isFetching: false,
  errorMessage: undefined,
};

const direcoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DirectoryActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case DirectoryActionTypes.FETCH_COLLECTIONS_SUCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
        errorMessage: undefined,
      };
    case DirectoryActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default direcoryReducer;
