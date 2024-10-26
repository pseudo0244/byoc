import React from 'react';
import './HomePage.css';

const App = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">DreamCars</div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="navbar-btn">Sign In</button>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-left">
          <h1>Build Your Dream Car in 3D</h1>
        </div>
        <div className="hero-right">
          <p>
            Experience the thrill of designing your own car with our easy-to-use 3D configurator. Customize every detail to match your style and preferences, then purchase your dream vehicle with just a click.
          </p>
          <div className="hero-buttons">
            <button className="start-btn">Start</button>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* Car Image */}
      <div className="car-image">
        <img src="/Assets/home-sideview.avif" alt="Dream Car" />
      </div>

      {/* Steps Section */}
      <section className="steps-section">
        <h2>Easily Configure, Visualize, and Purchase Your Dream Car in 3D</h2>
        <div className="steps-container">
          <div className="step">
            <h3>1</h3>
            <h4>Follow These Simple Steps to Build Your Custom Car Online</h4>
            <p>Start by selecting your car model and customizing its features.</p>
            <a href="#build" className="link">Build ➔</a>
          </div>
          <div className="step">
            <h3>2</h3>
            <h4>Visualize Your Custom Car in Stunning 3D Before You Buy</h4>
            <p>See every detail of your car come to life in 3D.</p>
            <a href="#view" className="link">View ➔</a>
          </div>
          <div className="step">
            <h3>3</h3>
            <h4>Complete Your Purchase with Just a Few Clicks</h4>
            <p>Finalize your order and get ready to hit the road!</p>
            <a href="#buy" className="link">Buy ➔</a>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Build Your Dream Car Today</h2>
        <p>Unleash your creativity and design the car you've always wanted. Start building it now!</p>
        <div className="cta-buttons">
          <button className="cta-start-btn">Start Building Your Car</button>
          <button className="cta-learn-more-btn">Learn More</button>
        </div>
      </section>

      {/* Feature Section */}
      <section className="feature-section">
        <div className="feature-content">
          <h2>Experience the Future of Car Buying with 3D Configuration</h2>
          <p>
            Our innovative 3D Car Configuration tool allows you to customize every detail
            of your vehicle. Visualize your dream car in stunning 3D before making your purchase.
          </p>
          <div className="features">
            <div className="feature">
              <h3>Total Customization</h3>
              <p>Tailor your car’s features, colors, and accessories to fit your unique style.</p>
            </div>
            <div className="feature">
              <h3>Real-Time Visualization</h3>
              <p>See your customizations come to life in a realistic 3D environment.</p>
            </div>
          </div>
        </div>
        <div className="feature-image">
          <img src="/Assets/porsche.png" alt="3D Car" />
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="feature-cards-section">
        <h2>Explore Our Exciting Features for Custom Car Building and Buying</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="/Assets/card1.jpg" alt="Customization Experience" />
            <h3>Discover the Benefits of Our Unique Customization Experience</h3>
            <p>Choose from a wide range of models to suit your style.</p>
            <a href="#">Learn More &rarr;</a>
          </div>
          <div className="feature-card">
            <img src="/Assets/card2.avif" alt="Real-Time Updates" />
            <h3>Stay Informed with Real-Time Updates on Your Custom Build</h3>
            <p>Receive instant notifications about your car's progress and any changes.</p>
            <a href="#">Sign Up &rarr;</a>
          </div>
          <div className="feature-card">
            <img src="/Assets/card3.jpg" alt="Expert Support" />
            <h3>Get Expert Support for Your Custom Car Building Journey</h3>
            <p>Our knowledgeable team is here to assist you every step of the way.</p>
            <a href="#">Contact &rarr;</a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="blog-header">
          <p>Blog</p>
          <h1>Explore Our Latest Insights</h1>
          <p>Stay updated with car customization trends.</p>
        </div>
        
        <div className="blog-cards">
          <div className="blog-card">
            <img src="/Assets/blog1.jpg" alt="Custom Car Tips" className="blog-image" />
            <div className="blog-content">
              <div className="blog-meta">
                <span className="category">Customization</span>
                <span className="read-time">5 min read</span>
              </div>
              <h3>Top Tips for Custom Cars</h3>
              <p>Discover essential tips for customizing your vehicle effectively.</p>
              <a href="#" className="read-more">Read more →</a>
            </div>
          </div>

          <div className="blog-card">
            <img src="/Assets/blog2.jpg" alt="Car Buying Process" className="blog-image" />
            <div className="blog-content">
              <div className="blog-meta">
                <span className="category">Buying</span>
                <span className="read-time">5 min read</span>
              </div>
              <h3>Navigating the Car Buying Process</h3>
              <p>Learn how to make informed car buying decisions.</p>
              <a href="#" className="read-more">Read more →</a>
            </div>
          </div>

          <div className="blog-card">
            <img src="/Assets/blog3.jpg" alt="Car Customization Trends" className="blog-image" />
            <div className="blog-content">
              <div className="blog-meta">
                <span className="category">News</span>
                <span className="read-time">5 min read</span>
              </div>
              <h3>Latest Trends in Car Customization</h3>
              <p>Explore the newest innovations in car customization.</p>
              <a href="#" className="read-more">Read more →</a>
            </div>
          </div>
        </div>

        <div className="view-all">
          <button className="view-all-btn">View all</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">
          <img src="/Assets/logo.png" alt="Porsche Logo" className="logo" />
        </div>
        <div className="footer-content">
          <div className="newsletter">
            <p>Subscribe to our newsletter for the latest features and product updates.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email here" />
              <button type="submit">Join</button>
            </form>
            <p className="privacy-notice">
              By subscribing, you consent to our Privacy Policy and receiving updates.
            </p>
          </div>
          <div className="footer-links">
            <div className="quick-links">
              <h4>Quick Links</h4>
              <ul>
                <li>Home Page</li>
                <li>Build Your Car</li>
                <li>Customer Support</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="resources">
              <h4>Resources</h4>
              <ul>
                <li>Blog Posts</li>
                <li>FAQs</li>
                <li>User Guides</li>
                <li>Community Forum</li>
                <li>Feedback</li>
              </ul>
            </div>
            <div className="social-media">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook"></i> Facebook</a>
                <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
                <a href="#"><i className="fab fa-twitter"></i> X</a>
                <a href="#"><i className="fab fa-linkedin"></i> LinkedIn</a>
                <a href="#"><i className="fab fa-youtube"></i> YouTube</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Porsche. All rights reserved.</p>
          <div className="policies">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
