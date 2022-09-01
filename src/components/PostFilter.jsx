import React from "react";
import MyInput from "./UI/input/myInput";
import MySelect from "./UI/select/MySelect";
import { useDispatch, useSelector } from "react-redux";
import { changeQuery, changeSort } from "../store/reducers/PostsSlice";

const PostFilter = () => {
  const options = [
    { name: "title", title: "По названию" },
    { name: "body", title: "По содержанию" },
  ];
  const dispatch = useDispatch();
  const { filterOptions } = useSelector((state) => state.postsSlice);
  return (
    <div>
      <MyInput
        placeholder={"Поиск"}
        value={filterOptions.query}
        onChange={(e) => dispatch(changeQuery(e.target.value))}
      ></MyInput>
      <MySelect
        value={filterOptions.sort}
        onChange={(sort) => dispatch(changeSort(sort))}
        options={options}
      />
    </div>
  );
};

export default PostFilter;
