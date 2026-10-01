import React, { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleGetStarted = () => {
    setCurrentPage("plants");
  };

  const renderPage = () => {
    if (currentPage === "plants") {
      return <ProductList setCurrentPage={setCurrentPage} />;
    }

    if (currentPage === "cart") {
      return <CartItem setCurrentPage={setCurrentPage} />;
    }

    return (
      <>
        <section className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>

            <p>
              Discover beautiful houseplants and bring a little more green
              into your everyday space.
            </p>

            <button
              className="get-started-btn"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </div>
        </section>

        <AboutUs />
      </>
    );
  };

  return (
    <div className="app">
      {renderPage()}
    </div>
  );
}

export default App;