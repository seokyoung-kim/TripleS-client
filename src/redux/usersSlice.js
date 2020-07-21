import { createSlice } from '@reduxjs/toolkit';
import * as authApi from 'api/auth';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    user: null,
    isLoggedIn: false,
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
  },
});

export const {
  loginSuccess,
  loginFailure,
  logout,
  setUser,
  tempSetUser,
  check,
} = usersSlice.actions;
export default usersSlice.reducer;

export const logUserIn = ({ token, provider }) => async (dispatch) => {
  try {
    // TODO: 서버에 소셜 로그인 요청
    if (provider === 'naver') {
      const user = await authApi.naverLogin({ token });
      localStorage.setItem('user', user);
      dispatch(loginSuccess({ user }));
    }

    if (provider === 'google') {
      const user = await authApi.googleLogin({ token });
      localStorage.setItem('user', user);
      dispatch(loginSuccess({ user }));
    }
  } catch (err) {
    console.log(err);
    dispatch(loginFailure(err));
  }
};

// export const logUserOut = () => async (dispatch) => {
//   console.log(naverLogout);
//   naverLogout();
//   localStorage.removeItem('token');
//   localStorage.removeItem('user');
//   dispatch(logout());
// };
