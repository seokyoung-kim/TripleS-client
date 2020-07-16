import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// import * as authApi from 'lib/api/auth';

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

export const logUserIn = (user) => async (dispatch) => {
  try {
    // TODO: 서버에 소셜 로그인 요청
    const accessToken = await axios.post('/api/v1/auth/social/naver', {
      user,
    });

    // 발급 받은 토큰을 헤더에 바로 고정 시킴 - token을 localStorage, cookie 등에 저장하지 않기 위한 방법
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    dispatch(loginSuccess({ user }));
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
