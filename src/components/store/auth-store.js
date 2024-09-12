import { configureStore, createSlice } from "@reduxjs/toolkit";

const defaultAuthState = { token: "", isLoggedIn: false };

const authSlice = createSlice({
  name: "auth",
  initialState: defaultAuthState,
  reducers: {
    login: (state, action) => {
      const token = action.payload;
      localStorage.setItem("token", token);
      state.token = token;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const AuthStore = configureStore({
  reducer: { auth: authSlice.reducer },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
