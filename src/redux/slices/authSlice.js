import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // userInfo: localStorage.getItem("userInfo")
  //   ? JSON.parse(localStorage.getItem("userInfo"))
  //   : null,
  userInfo: null,
  // token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // set local storage after login
    setCredentials: (state, action) => {
      // state.userInfo = action.payload;
      // localStorage.setItem("userInfo", JSON.stringify(action.payload));
      // const { user, accessToken } = action.payload;
      state.userInfo = action.payload;
      // state.token = accessToken;
    },
    // clear the local storage credentials to logout
    clearCredentials: (state, action) => {
      state.userInfo = null;
      // state.token = null;
      // localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.userInfo;

export const selectToken = (state) => state.auth.token;
