import { createSlice } from "@reduxjs/toolkit";

export const PostSlice = createSlice({
  name: "postsSlice",
  initialState: {
    posts: [],
    totalCount: 0,
    isLoading: false,
    error: "",
    limit: 10,
    page: 1,
    filterOptions: { query: "", sort: "" },
    postDetails: {},
    postComments: [],
  },
  reducers: {
    addPost(state, action) {
      const { title, body } = action.payload;
      state.posts.push({ id: state.posts.length + 1, title, body });
    },
    deletePost(state, action) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    startFetching(state) {
      state.isLoading = true;
    },
    successPostFetching(state, action) {
      const [posts, count] = action.payload;
      state.totalCount = count;
      state.posts = posts;
      state.isLoading = false;
    },
    rejectedFetching(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    successPostDetailsFetching(state, action) {
      const [post, comments] = action.payload;
      state.postDetails = post;
      state.postComments = comments;
      state.isLoading = false;
    },
    changePostsPage(state, action) {
      state.page = action.payload;
    },
    changeQuery(state, action) {
      state.filterOptions = { ...state.filterOptions, query: action.payload };
    },
    changeSort(state, action) {
      state.filterOptions = { ...state.filterOptions, sort: action.payload };
    },
  },
});

export const {
  addPost,
  deletePost,
  startFetching,
  successPostFetching,
  successPostDetailsFetching,
  rejectedFetching,
  changePostsPage,
  changeQuery,
  changeSort,
} = PostSlice.actions;
export default PostSlice.reducer;
