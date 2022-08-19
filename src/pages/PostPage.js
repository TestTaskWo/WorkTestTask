import PostDetails from "../components/PostDetails";
import PostComments from "../components/PostComments";
import MyButton from "../components/UI/button/myButton";
import { useNavigate } from "react-router-dom";

const PostPage = () => {
  const router = useNavigate();
  return (
    <div>
      <PostDetails />
      <PostComments />
      <MyButton title={"Назад"} className="back" onClick={() => router(-1)} />
    </div>
  );
};

export default PostPage;
