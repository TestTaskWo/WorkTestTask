import React from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetcing";
import { PostService } from "../api/postService";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../components/UI/loader/Loader";

const PostComments = () => {
  const params = useParams();
  const [comments, setComments] = useState([]);
  const [fetchComments, isLoading, error] = useFetching(async () => {
    const response = await PostService.getPostCommentsById(params.id);
    setComments(response.data);
  });
  useEffect(() => {
    fetchComments();
  }, []);

  if (error) {
    return <h1 style={{ textAlign: "center" }}> Нет комментариев!</h1>;
  }
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        comments.map((comment) => {
          return (
            <div key={comment.email} style={{ marginTop: 15 }}>
              <h3>{comment.email}</h3>
              <p>{comment.body}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default PostComments;
