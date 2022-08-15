import React from "react";
import MyInput from "./UI/input/myInput";
import MySelect from './UI/select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
    const options = [
		{ name: "title", title: "По названию" },
		{ name: "body", title: "По содержанию" },
	];
	return (
		<div>
			<MyInput
				placeholder={"Поиск"}
				value={filter.query}
				onChange={(e) => setFilter({ ...filter, query: e.target.value })}
			></MyInput>
			<MySelect
				value={filter.sort}
				onChange={(sort) => setFilter({ ...filter, sort: sort })}
				options={options}
			/>
		</div>
	);
};

export default PostFilter;
