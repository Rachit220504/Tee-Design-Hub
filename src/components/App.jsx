import React, { useState } from "react";
import Header from "./Header.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Prod from "./Prod.jsx";

export default function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleGetStarted = () => {
    setShowRegister(false);
    setShowLogin(true);
    document.body.classList.add("body-blurred");
  };

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
    document.body.classList.add("body-blurred");
  };
  const handleShowRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
    document.body.classList.add("body-blurred");
  };

  const closeRegisterOrLogin = () => {
    setShowRegister(false);
    setShowLogin(false);
    document.body.classList.remove("body-blurred");
  };
  
  return (
    <div className="app">
      {/* Header Section */}
      <div className="header-section">
      <Header />
      </div>
      

      {/* Hero Section */}
      <main className="hero-section first-page">
        <div className="text-content">
          <h1>
            Design <br /> Your <br /> Dream T-Shirts
          </h1>
          <p>
            Choose from stylish presets or create your own by uploading designs,
            adding text, or graphics.
          </p>
          <button className="get-started" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </main>

      {/* Products Section */}
      <section className="products-section">
        <h2>Our Products</h2>
        <div className="products">
           <Prod />
           <Prod/>
        </div>
      </section>

      {/* Overlay for Register/Login */}
      {(showRegister || showLogin) && (
        <div className="overlay">
          {showRegister && <Register onClose={closeRegisterOrLogin} onLogin={handleShowLogin}/>}
          {showLogin && <Login onClose={closeRegisterOrLogin} onRegister={handleShowRegister}/>}
        </div>
      )}
      <div className="customizeOrder">
        {/* </Customrder> */}
        <h1>Customized Order Section</h1>
        <div className="custom_order">
          
        </div>
      </div>
    </div>
  );
}
