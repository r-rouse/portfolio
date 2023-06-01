import React from 'react';
import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 Randall Rouse is Daddy. All rights reserved.</p>
        <nav className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/resume">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
