"use client"

import { FormEventHandler, useState } from "react";
import { usePosts } from "../store";
import useSWR from "swr";
import { getPostsBySearch } from "../service/getPosts";

const PostSearch = () => {
  const {mutate} = useSWR("posts")
  const [search, setSearch]= useState('')
  // const getPostsBySearch = usePosts(state =>state.getPostsBySearch)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const posts = await getPostsBySearch(search)
    mutate(posts)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={search} type="search" onChange={e => setSearch(e.target.value)} placeholder="Поиск..."/>
      <button type="submit">Search</button>
    </form>
  );
};

export default PostSearch;