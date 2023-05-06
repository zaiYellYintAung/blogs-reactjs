import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <BlogCard title={blog.title} body={blog.body} />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
