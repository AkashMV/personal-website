// src/app/blog/page.tsx
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-xl mb-8">Welcome to my blog!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Blog post 1 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Blog Post 1</h2>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link href="/blog/post1" className="text-blue-500 hover:underline">
            Read More
          </Link>
        </div>

        {/* Blog post 2 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Blog Post 2</h2>
          <p className="text-gray-600 mb-4">Pellentesque euismod, nisi eu consectetur consectetur.</p>
          <Link href="/blog/post2" className="text-blue-500 hover:underline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
