import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <footer id="contact" className="footer-section">
      <div className="section-container">
        <div className="footer-content">
          <p className="footer-text">
            © Copyright {currentYear} Nitin Shukla. Built with{' '}
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>
            {' '}and{' '}
            <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a>.
            {' '}Inspired by{' '}
            <a href="https://github.com/alshedivat/al-folio" target="_blank" rel="noopener noreferrer">al-folio</a>
            {' '}theme. Hosted by{' '}
            <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages</a>.
            {' '}Last updated: {lastUpdated}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;