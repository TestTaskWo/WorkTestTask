import {
  startFetching,
  successPostDetailsFetching,
  rejectedFetching,
} from "../reducers/PostsSlice";
import { PostService } from "../../api/postService";

export default async function postDetailsFetching(dispatch, id) {
  try {
    dispatch(startFetching());
    const post = await PostService.getById(id);
    const comments = await PostService.getPostCommentsById(id);
    dispatch(successPostDetailsFetching([post.data, comments.data]));
  } catch (error) {
    dispatch(rejectedFetching(error));
  }
}
