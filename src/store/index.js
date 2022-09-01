import { configureStore } from "@reduxjs/toolkit";
import PostsSliceReducer  from "./reducers/PostsSlice";
import UserSliceReducer from "./reducers/UserSlice";

const store = configureStore({
  reducer: {
    postsSlice: PostsSliceReducer,
    user: UserSliceReducer,
  }
});

export default store;
