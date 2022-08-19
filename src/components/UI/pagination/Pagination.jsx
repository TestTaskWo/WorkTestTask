import { PaginationBlock, PaginationButton } from "./styled";

const Pagination = ({ paginationArray, page, callback }) => {
  return (
    <PaginationBlock>
      {paginationArray.map((el) => {
        return (
          <PaginationButton
            onClick={() => callback(el)}
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
