import React from "react";
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({ posts, title }) => {
	if (posts.length < 1) {
		return <h1 style={{ textAlign: "center" }}> Нет постов</h1>;
	}

	return (
		<div>
			<h2 style={{ textAlign: "center" }}>{title}</h2>
			<TransitionGroup>
				{posts.map((post) => (
					<CSSTransition key={post.id} classNames={"post"} timeout={500}>
						<PostItem
							title={post.title}
							body={post.body}
							id={post.id}
							index={post.id}
						/>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
};

export default PostList;
