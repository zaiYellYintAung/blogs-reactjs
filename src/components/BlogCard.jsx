import React from "react";

const BlogCard = ({ title, body }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>

        <div className="content">{body}</div>
        <button className="button is-small">Button </button>
      </div>
      <hr></hr>
    </div>
  );
};

export default BlogCard;
