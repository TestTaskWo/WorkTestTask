import { PaginationBlock, PaginationButton } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import postFetching from "../../../store/creators/PostFetching";
import { changePostsPage } from "../../../store/reducers/PostsSlice";

const Pagination = ({ paginationArray }) => {
  const dispatch = useDispatch();
  const { page, limit } = useSelector((state) => state.postsSlice);
  return (
    <PaginationBlock>
      {paginationArray.map((el) => {
        return (
          <PaginationButton
            onClick={() => {
              postFetching(dispatch, limit, el);
              dispatch(changePostsPage(el));
            }}
            isActive={page === el}
            key={el}
          >
            {el}
          </PaginationButton>
        );
      })}
    </PaginationBlock>
  );
};

export default Pagination;
