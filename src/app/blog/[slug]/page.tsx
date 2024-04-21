// src/app/blog/[slug]/page.tsx
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const { slug } = useParams();

  // Fetch the blog post data based on the slug
  // You can replace this with your own data fetching logic
  const post = {
    title: `Blog Post ${slug}`,
    content: `This is the content of blog post ${slug}.`,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600">{post.content}</p>
    </div>
  );
}
