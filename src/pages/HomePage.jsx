import React from 'react';
import './HomePage.css'; 

const App = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Build Your Dream Car in 3D</h1>
          <p>
            Experience the thrill of designing your own car with our easy-to-use 3D configurator. Customize every detail to match your style, and purchase your dream vehicle with just a click.
          </p>
          <div className="hero-buttons">
            <button className="start-btn">Start</button>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
        <div className="car-image">
          <img src="/Assets/porsche.png" alt="Dream Car" />
        </div>
      </section>
    </div>
  );
};

export default App;
