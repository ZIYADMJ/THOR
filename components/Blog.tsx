import React from "react"
import Card from "../components/Card"

interface Post {
  id: number
  title: string
  content: string
  imageUrl?: string
}

interface BlogProps {
  posts: Post[]
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            imageUrl={post.imageUrl}
            content={post.content}
          />
        ))}
      </ul>
    </div>
  )
}

export default Blog
