import {
  startFetching,
  successPostFetching,
  rejectedFetching,
} from "../reducers/PostsSlice";
import { PostService } from "../../api/postService";

export default async function postFetching(dispatch, limit = 10, page = 1) {
  try {
    dispatch(startFetching());
    const response = await PostService.getAll(limit, page);
    dispatch(
      successPostFetching([response.data, response.headers["x-total-count"]])
    );
  } catch (error) {
    dispatch(rejectedFetching(error));
  }
}
