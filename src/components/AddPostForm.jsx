import React, { useState } from "react";
import MyButton from "./UI/button/myButton";
import MyInput from "./UI/input/myInput";

const AddPostForm = ({ create }) => {
	const [post, setPost] = useState({ title: "", body: "" });
	const addNewPost = (e) => {
		e.preventDefault();
		create(post);
		setPost({ title: "", body: "" });
	};

	return (
		<form>
			<MyInput
				value={post.title}
				onChange={(e) => setPost({ ...post, title: e.target.value })}
				type={"text"}
				placeholder={"Название поста"}
			/>
			<MyInput
				value={post.content}
				onChange={(e) => setPost({ ...post, body: e.target.value })}
				type={"text"}
				placeholder={"Описание поста"}
			/>
			<MyButton disabled={false} title={"Добавить пост"} onClick={addNewPost} />
		</form>
	);
};

export default AddPostForm;
