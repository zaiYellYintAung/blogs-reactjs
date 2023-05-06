import React, { useEffect, useState } from "react";

const BlogCard = ({ title, body, id }) => {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    fetch("https://picsum.photos/200/300") // Fetch a random image from the Picsum API
      .then((response) => {
        setImageURL(response.url);
      });
  }, [id]);

  return (
    <div className="card">
      <img src={imageURL} alt="Random Image" />
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>

        <div className="content">{body}</div>
        <button className="button is-small is-danger">Delete </button>
      </div>
      <hr></hr>
    </div>
  );
};

export default BlogCard;
