import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "../api/auth";
import { Credentials } from "../model/Credentials";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: Credentials) => {
    const response = await authAPI.login(credentials);
    return response;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    status: "",
    usuario: null,
    mensagem: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = "success";
      state.usuario = action.payload;
      return state;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = "failed";
      return state;
    });
    builder.addCase(login.pending, (state, action) => {
      state.status = "loading";
      return state;
    });
  },
});

export const selectUsuario = (state) => state.user.usuario;

export default loginSlice.reducer;
