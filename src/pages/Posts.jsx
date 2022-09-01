import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import AddPostForm from "../components/AddPostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePost";
import Loader from "../components/UI/loader/Loader";
import postFetching from "../store/creators/PostFetching";
import { usePagination } from "../hooks/usePagination";
import Pagination from "../components/UI/pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, error, totalCount, limit, filterOptions } =
    useSelector((state) => state.postsSlice);
  const [visible, setVisible] = useState(false);
  const sortedAndSearchedPosts = usePosts(
    posts,
    filterOptions.sort,
    filterOptions.query
  );
  const [paginationArray] = usePagination(totalCount, limit);

  useEffect(() => {
    postFetching(dispatch);
  }, []);

  return (
    <div className="App">
      <PostFilter />
      <MyButton onClick={() => setVisible(true)} title={"Добавить пост"} />
      <MyModal visible={visible} setVisible={setVisible}>
        <AddPostForm />
      </MyModal>
      {error && <h1> Произошла ошибка {error}</h1>}
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader />
        </div>
      ) : (
        <PostList posts={sortedAndSearchedPosts} title={"Список новостей"} />
      )}
      <Pagination paginationArray={paginationArray} />
    </div>
  );
};

export default Posts;
