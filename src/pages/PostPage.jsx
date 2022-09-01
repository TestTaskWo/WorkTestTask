import PostDetails from "../components/PostDetails";
import MyButton from "../components/UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostPage = () => {
  const router = useNavigate();
  return (
    <div>
      <PostDetails />
      <MyButton title={"Назад"} className="back" onClick={() => router(-1)} />
    </div>
  );
};

export default PostPage;
