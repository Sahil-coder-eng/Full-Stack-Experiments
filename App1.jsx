// App.jsx
import React from "react";
import ProCard from "./components/procard";

const App = () => {
  const products = [
    { name: "Laptop", price: 1200, stock: true },
    { name: "Smartphone", price: 800, stock: false },
    { name: "Headphones", price: 150, stock: true },
    { name: "Smartwatch", price: 250, stock: true },
    { name: "Iphone 14 pro max", price: 140000, stock: true }
  ];

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      padding: "20px"
    }}>
      {products.map((product, index) => (
        <ProCard
          key={index}
          name={product.name}
          price={product.price}
          stock={product.stock}
        />
      ))}
    </div>
  );
};

export default App1;
