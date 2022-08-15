import React from "react";
import MyButton from "./UI/button/myButton";

const PostItem = ({ title, body, id, index, deletePost }) => {
	return (
		<div className="post">
			<h3 className="post_title">
				{index}.{title}
			</h3>
			<p className="post_content">{body}</p>
			<div className="buttons">
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
