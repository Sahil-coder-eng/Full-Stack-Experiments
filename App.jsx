import React from "react";
import ProductCard from "./ProductCard";

const App = () => {
  const products = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Headphones", price: 150, inStock: false },
    { name: "Smartphone", price: 800, inStock: true },
  ];

  return (
    <div>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          inStock={product.inStock}
        />
      ))}
    </div>
  );
};

export default App;
