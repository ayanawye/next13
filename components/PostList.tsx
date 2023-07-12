"use client";
import Link from "next/link";
import { useEffect } from "react";
import { usePosts } from "../store";
import { shallow } from "zustand/shallow";
import useSWR from "swr";
import { getAllPosts } from "../service/getPosts";

const PostList = () => {
  const {data: posts, isLoading} = useSWR("posts", getAllPosts)
  // const [posts, loading, getAllPosts] = usePosts(
  //   (state) => [state.posts, state.loading, state.getAllPosts],
  //   shallow
  // );

  // useEffect(() => {
  //   getAllPosts();
  // }, [getAllPosts]);
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {posts.map((post: any) => (
            <li
              key={post.id}
              style={{ listStyle: "inherit", textAlign: "center" }}
            >
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default PostList;
