import React from "react";
  // Import the new CSS file

function BuyNow({ product }) {
  if (!product) {
    return <h2 className="error-message">Error: No product selected.</h2>;
  }

  const handleCheckout = () => {
    alert(`Proceeding to checkout for ${product.title}`);
  };

  return (
    <div className="buy-now-container">
      <div className="buy-now-content">
        <div className="product-image-section">
          <img src={product.imgSrc} alt={product.title} className="product-image" />
        </div>

        <div className="product-details-section">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-price">₹{product.price}</p>
          <p className="product-info"><strong>Size:</strong> {product.size}</p>
          <p className="product-info"><strong>Color:</strong> {product.color}</p>
          <p className="product-description">{product.description}</p>
        </div>

        <div className="checkout-section">
          <h2>Order Summary</h2>
          <p><strong>Price:</strong> ₹{product.price}</p>
          <p><strong>Delivery:</strong> Free</p>
          <hr />
          <h3>Total: ₹{product.price}</h3>
          <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
          <button className="back-button" onClick={() => window.history.back()}>Back to Products</button>
        </div>
      </div>
    </div>
  );
}

export default BuyNow;
