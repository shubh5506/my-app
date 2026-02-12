export default function BlogCard({ blog, onClick }) {
  return (
    <div className="blog-card">
      <h3>{blog.title}</h3>

      <p className="blog-meta">
        {blog.date} • {blog.readTime}
      </p>

      <p>{blog.excerpt}</p>

      <button
  className="read-more"
  onClick={() => {
    const newWindow = window.open("", "_blank");

    newWindow.document.write(`
      <html>
        <head>
          <title>${blog.title}</title>
          <style>
            body {
               font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
               Roboto, "Helvetica Neue", Arial, sans-serif;
               max-width: 900px;
               margin: 60px auto;
               padding: 0 20px;
               background: #0f172a;   /* soft dark navy instead of black */
               color: #e5e7eb;        /* soft gray instead of pure white */
               line-height: 1.7;
               font-size: 18px;
            }
            h1 { margin-bottom: 10px; }
            .meta { color: #aaa; margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <h1>${blog.title}</h1>
          <div class="meta">${blog.date} • ${blog.readTime}</div>
          <pre style="white-space: pre-wrap">${blog.content}</pre>
        </body>
      </html>
    `);

    newWindow.document.close();
  }}
>
  Read more →
</button>

    </div>
  );
}
