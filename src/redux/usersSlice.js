import { createSlice } from '@reduxjs/toolkit';
import * as authApi from 'api/auth';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoggedIn: false,
    auth: null,
    user: null,
    loading: null,
    error: null,
  },
  reducers: {
    loginSuccess(state, action) {
      const { user } = action.payload;
      state.user = user;
      state.isLoggedIn = true;
    },
    loginFailure(state, action) {
      const error = action.payload;
      state.isLoggedIn = false;
      state.user = null;
      state.error = error;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
    verifyStart(state) {
      state.loading = true;
      state.authError = null;
    },
    verifySuccess(state, { payload: user }) {
      state.isLoggedIn = true;
      state.user = user;
      state.loading = false;
      state.authError = null;
    },
    verifyFailure(state, { payload: error }) {
      state.isLoggedIn = false;
      state.user = null;
      state.loading = false;
      state.authError = error;
    },
  },
});

export const {
  loginSuccess,
  loginFailure,
  logout,
  setUser,
  tempSetUser,
  check,
  verifyStart,
  verifySuccess,
  verifyFailure,
} = usersSlice.actions;
export default usersSlice.reducer;

export const googleLogin = () => async (dispatch) => {
  console.log('dd');
  try {
    const user = await authApi.googleLogin();
    console.log(user);
    // TODO: 서버에 소셜 로그인 요청
    // if (provider === 'naver') {
    //   localStorage.setItem('user', user);
    //   dispatch(loginSuccess({ user }));
    // }

    // if (provider === 'google') {
    //   const user = await authApi.googleLogin();
    //   localStorage.setItem('user', user);
    //   dispatch(loginSuccess({ user }));
    // }
  } catch (err) {
    console.log(err);
    // dispatch(loginFailure(err));
  }
};

// export const logUserOut = () => async (dispatch) => {
//   console.log(naverLogout);
//   naverLogout();
//   localStorage.removeItem('token');
//   localStorage.removeItem('user');
//   dispatch(logout());
// };

export const verifyUser = () => async (dispatch) => {
  console.log('verify user');
  try {
    dispatch(verifyStart());
    const user = await authApi.verify();
    dispatch(verifySuccess(user.data));
  } catch (err) {
    try {
      localStorage.removeItem('user');
    } catch (e) {
      console.log('localStorage is not working');
    }

    dispatch(verifyFailure(err));
  }
};
