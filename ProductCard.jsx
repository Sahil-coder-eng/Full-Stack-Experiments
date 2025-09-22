// src/components/ProCard.jsx
import React from "react";

const ProductCard = ({ name, price, stock }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      margin: "8px",
      width: "200px",
      boxShadow: "2px 2px 12px rgba(0,0,0,0.1)"
    }}>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Status: {stock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};

export default ProductCard;
