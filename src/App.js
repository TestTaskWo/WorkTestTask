import React, { useEffect, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import AddPostForm from "./components/AddPostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/myButton";
import { usePosts } from "./hooks/usePost";
import { PostService } from "./api/postService";
import Loader from "./components/UI/loader/Loader";
import { useFetching } from "./hooks/useFetcing";

const App = () => {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ query: "", sort: "" });
	const [visible, setVisible] = useState(false);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const [fetchPosts, isPostLoading, PostError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page);
		setPosts(response.data);
		const count = response.headers['x-total-count'];
	});
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const addPost = (newPost) => {
		setPosts([...posts, { ...newPost, id: Date.now() }]);
		setVisible(false);
	};
	const deletePost = (id) => {
		setPosts(posts.filter((post) => post.id !== id));
	};
	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div className="App">
			<PostFilter filter={filter} setFilter={setFilter} />
			<MyButton onClick={() => setVisible(true)} title={"Добавить пост"} />
			<MyModal visible={visible} setVisible={setVisible}>
				<AddPostForm create={addPost} />
			</MyModal>
			{
				PostError &&
				<h1> Произошла ошибка {PostError}</h1>
			}
			{isPostLoading ? (
				<div style={{ display: 'flex', justifyContent: 'center' }}><Loader /></div>
			) : (
				<PostList
					posts={sortedAndSearchedPosts}
					title={"Список новостей"}
					deletePost={deletePost}
				/>
			)}
		</div>
	);
};

export default App;
