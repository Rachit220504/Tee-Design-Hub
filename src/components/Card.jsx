import React from "react";
function Card({ product, onClick }) {
    return (
      <div className="card" onClick={onClick}>
        <img src={product.imgSrc} alt={product.title} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{product.title}</h3>
          <p className="card-price">Rs.{product.price}</p>
          <button className="card-button">View Details</button>
        </div>
      </div>
    );
  }
export default Card;