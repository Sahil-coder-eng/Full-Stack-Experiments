import React from "react";

// Reusable ProductCard component
const ProductCard = ({ name, price, inStock }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      width: "250px",
      margin: "10px"
    }}>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Status: {inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};

export default ProductCard;
