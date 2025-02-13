import React, { useState } from "react";
import ProductDetails from "./Proddetails";
import Card from "./Card";
// Gallery Component to Display Multiple Cards
function Gallery() {
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    // Array of Products
    const products = [
      {
        imgSrc: "/assets/img1.png",
        title: "Product 1",
        price: 299.99,
        size: "Medium",
        color: "White",
        description: "A high-quality product that meets your expectations.",
      },
      {
        imgSrc: "/assets/img2.png",
        title: "Product 2",
        price: 499.99,
        size: "Large",
        color: "Black",
        description: "Perfect for your daily needs and comfort.",
      },
      {
        imgSrc: "/assets/img3.png",
        title: "Product 3",
        price: 399.99,
        size: "Small",
        color: "Black",
        description: "An affordable and reliable option for everyone.",
      },
      {
        imgSrc: "/assets/img4.png",
        title: "Product 4",
        price: 499.99,
        size: "Extra Large",
        color: "White",
        description: "A premium product with exceptional durability.",
      },
    ];
  
    return (
      <div className="gallery-container">
        <div className="gallery">
          {products.map((product, index) => (
            <Card
              key={index}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
  
        {/* Render Product Details if a product is selected */}
        {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    );
  }
  

export default Gallery;
