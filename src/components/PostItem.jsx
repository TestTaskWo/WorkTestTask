import React from "react";
import MyButton from "./UI/button/myButton";
import { useNavigate } from "react-router-dom";

const PostItem = ({ title, body, id, index, deletePost }) => {
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
          onClick={() => deletePost(id)}
          className="delete"
          title={"Удалить"}
        />
      </div>
    </div>
  );
};

export default PostItem;
