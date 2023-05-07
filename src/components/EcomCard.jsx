import React from "react";

const EcomCard = ({ product }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-3by2">
          <img src={product.image} alt={product.title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-3">{product.title}</p>
            <p className="subtitle is-5">{product.category}</p>
          </div>
        </div>

        <div className="content">
          <p>{product.description}</p>
          <strong>Price: ${product.price}</strong>
        </div>
      </div>
    </div>
  );
};

export default EcomCard;
