import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bid, setBid] = useState(0);
  const handleDelete = () => {};

  const refresh = () => {
    setBid(bid + 10);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const slicedData = data.slice(0, bid);
        setBlogs(slicedData);
      });
  }, [bid]);
  return (
    <div className="@">
      {blogs.map((blog) => (
        <div key={blog.id}>
          <BlogCard title={blog.title} body={blog.body} id={blog.id} />
        </div>
      ))}
      <div className="button is-hero is-full-width" onClick={refresh}>
        More
      </div>
      <br></br>
    </div>
  );
};

export default Blogs;
