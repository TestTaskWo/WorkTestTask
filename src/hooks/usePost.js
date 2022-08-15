import { useMemo } from "react";

const useSortedPosts = (posts, sort) => {
	const sortedPosts = useMemo(() => {
		if (sort) {
			return [...posts].sort((post, post2) =>
				post[sort].localeCompare(post2[sort])
			);
		}
		return posts;
	}, [sort, posts]);
	return sortedPosts;
};

export const usePosts = (post, sort, query) => {
    const sortedPosts = useSortedPosts(post, sort);

    const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter((post) =>
			post.title.toLowerCase().includes(query)
		);
	}, [sortedPosts, query]);
    return sortedAndSearchedPosts;
};
