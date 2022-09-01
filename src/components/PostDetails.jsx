import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../components/UI/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import postDetailsFetching from "../store/creators/PostDetailsFetching";

const PostDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { postDetails, postComments, isLoading, error } = useSelector(
    (state) => state.postsSlice
  );
  useEffect(() => {
    postDetailsFetching(dispatch, params.id);
  }, []);

  if (error) {
    return <h1 style={{ textAlign: "center" }}> Нет поста!</h1>;
  }
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h2 style={{marginTop: 15, marginBottom: 15}}>Заголовок</h2>
          <h3>{postDetails.title}</h3>
          <h2 style={{marginTop: 15, marginBottom: 15}}>Описание</h2>
          <h3>{postDetails.body}</h3>
          <div>
            {postComments.map((comment) => {
              return (
                <div key={comment.email} style={{ marginTop: 15 }}>
                  <h3>{comment.email}</h3>
                  <p>{comment.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
