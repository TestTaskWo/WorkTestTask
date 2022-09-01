import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    isAuthorized: false,
    token: "",
  },
  reducers: {
    authUser(state, action) {
      state.isAuthorized = true;
      state.token = action.payload;
    },
  },
});

export const { authUser } = UserSlice.actions;
export default UserSlice.reducer;
