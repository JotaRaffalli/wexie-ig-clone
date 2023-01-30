import React from "react";
import { useQuery } from "react-query";

import { API_URL } from "../../config";

export default function Home() {
  const { isLoading, error, data } = useQuery("posts", () => fetchPosts());
  // Fetch posts
  const fetchPosts = async () => {
    const url = `${API_URL}/posts`;
    const result = await fetch(url);
    const resultJson = await result.json();
    return resultJson;
  };

  // Fetch post user

  if (isLoading) return <>Is loading....</>;

  if (error) return <>An error occurred while fetching</>;

  return <div>Funciona</div>;
}
