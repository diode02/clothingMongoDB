import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  logOutAsync,
} from "../../utils/users.utils";
import UserActionTypes from "./user.types";

import {
  signInFailure,
  signInSuccess,
  signOutSucess,
  signOutFailure,
  signUpFailure,
  signUpSucess,
} from "./user.actions";

// export function* getSnapShotFromUserAuth(user, additionalData) {
//   try {
//     const userRef = yield call(createUserProfileDocument, user, additionalData);
//     const userSnapShot = yield userRef.get();

//     console.log(userSnapShot);

//     yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
//   } catch (error) {
//     yield put(signInFailure(error.message));
//   }
// }

// export function* signInWithGoogle() {
//   try {
//     const { user } = yield auth.signInWithPopup(googleProvider);
//     yield getSnapShotFromUserAuth(user);
//   } catch (error) {
//     yield put(signInFailure(error.message));
//   }
// }

export function* signinWithEmail({ payload: { email, password } }) {
  try {
    const user = yield signInWithEmailAndPassword({ email, password });
    if (!user.data) {
      console.log("err");
      throw user;
    }
    yield put(signInSuccess(user.data));
  } catch (error) {
    console.log("kkk");
    console.log(error);

    yield put(signInFailure(error));
  }
}

// export function* isUserAuthenticated() {
//   try {
//     const userAuth = yield getCurrentUser();
//     if (!userAuth) return;
//     yield getSnapShotFromUserAuth(userAuth);
//   } catch (error) {
//     yield put(signInFailure(error));
//   }
// }

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const user = yield createUserWithEmailAndPassword({
      email,
      password,
      name: displayName,
    });

    yield put(signUpSucess(user));
  } catch (error) {
    console.log(error);
    yield put(signUpFailure(error));
  }
}

export function* signOut({ payload }) {
  try {
    yield logOutAsync(payload);
    yield put(signOutSucess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

// export function* onGoogleSignInStart() {
//   yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
// }

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signinWithEmail);
}

// export function* onCheckUserSession() {
//   yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
// }

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield all([
    call(onSignUpStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
  ]);
}
