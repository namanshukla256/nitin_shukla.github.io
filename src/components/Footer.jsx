import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-social">
            <a href="mailto:nitinshukla1912@gmail.com">email</a>
            <span className="footer-separator">·</span>
            <a href="https://scholar.google.com/citations?user=5bz5rmAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">scholar</a>
            <span className="footer-separator">·</span>
            <a href="https://github.com/nitinShukla1912" target="_blank" rel="noopener noreferrer">github</a>
            <span className="footer-separator">·</span>
            <a href="https://www.linkedin.com/in/nitin-shukla-53b218189" target="_blank" rel="noopener noreferrer">linkedin</a>
          </div>
          <p className="footer-copyright">© 2026 Nitin Shukla</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;