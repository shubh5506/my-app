import { useState } from "react";
import { blogs } from "../Components/Blog";
import BlogCard from "../Components/BlogCard";
import "../CSS/index.css";

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section id="blog" className="blog-section container">
      <h2>Blog</h2>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            onClick={() => setSelectedBlog(blog)}
          />
        ))}
      </div>

      {selectedBlog && (
        <div className="blog-full">
          <h2>{selectedBlog.title}</h2>
          <p className="blog-meta">
            {selectedBlog.date} • {selectedBlog.readTime}
          </p>

          <div className="blog-content">
            {selectedBlog.content}
          </div>
        </div>
      )}
    </section>
  );
}