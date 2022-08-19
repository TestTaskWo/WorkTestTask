import React from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetcing";
import { PostService } from "../api/postService";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../components/UI/loader/Loader";

const PostDetails = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPost, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  useEffect(() => {
    fetchPost();
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
          <h1>{post.title}</h1>
          <p>Описание</p>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
