import React from 'react'
import { useSelector } from 'react-redux'

export const PostsList = () => {
  const notebooks = useSelector(state => state.notebooks)

  const renderedPosts = notebooks.map(notebook => (
    <article className="post-excerpt" key={notebook.id}>
      <h3>{notebook.title}</h3>
      <p className="post-content">{notebook.content.substring(0, 100)}</p>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

  

