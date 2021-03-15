import React from "react";
import { useSelector } from "react-redux";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => (
    <article  key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
