import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost } from "../store/reducers/PostsSlice";

const PostItem = ({ title, body, id, index }) => {
  const dispatch = useDispatch();
  const router = useNavigate();
  return (
    <div className="post">
      <h3 className="post_title">
        {index}.{title}
      </h3>
      <p className="post_content">{body}</p>
      <div className="buttons">
        <MyButton
          onClick={() => router(`/posts/${id}`)}
          className="open"
          title={"Открыть"}
        />
        <MyButton
          onClick={() => dispatch(deletePost(id))}
          className="delete"
          title={"Удалить"}
        />
      </div>
    </div>
  );
};

export default PostItem;
