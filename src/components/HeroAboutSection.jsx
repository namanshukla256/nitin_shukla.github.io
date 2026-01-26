import React from 'react';

const HeroAboutSection = () => {
  return (
    <section id="home" className="hero-about-section">
      <div className="hero-about-container">
        <div className="hero-about-content">
          <div className="about-left">
            <h1 className="hero-name">Nitin Shukla</h1>
            <div className="about-text">
              <p>
                I am a PhD student at <a href="https://gtu.ac.in/" target="_blank" rel="noopener noreferrer">Gujarat Technology University</a> and Senior Research Fellow at <a href="https://gbrc.gujarat.gov.in/" target="_blank" rel="noopener noreferrer">GBRC</a>. My research interests lie broadly in the field of <strong>Genomics</strong> and <strong>Computational Biology</strong>. I leverage omics methods to better understand epidemiology using and integrating various data sources and modalities. My current focus is on <strong>wastewater-based epidemiology</strong>, where I trace viruses circulating in human populations from urban wastewater, decipher viral evolution through mutation profiling and phylodynamics, and develop interfaces for better disease outbreak preparedness.
              </p>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-photo">
              <picture>
                <source
                  srcSet="/images/nitin-profile-2x.avif 2x, /images/nitin-profile.avif 1x"
                  type="image/avif"
                  media="(min-width: 769px)"
                />
                <source
                  srcSet="/images/nitin-profile-mobile-2x.avif 2x, /images/nitin-profile-mobile.avif 1x"
                  type="image/avif"
                  media="(max-width: 768px)"
                />
                <source
                  srcSet="/images/nitin-profile-2x.webp 2x, /images/nitin-profile.webp 1x"
                  type="image/webp"
                  media="(min-width: 769px)"
                />
                <source
                  srcSet="/images/nitin-profile-mobile-2x.webp 2x, /images/nitin-profile-mobile.webp 1x"
                  type="image/webp"
                  media="(max-width: 768px)"
                />
                <img
                  src="/images/nitin-profile-2x.png"
                  alt="Nitin Shukla"
                  className="profile-image"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  width="280"
                  height="280"
                />
              </picture>
            </div>
            <div className="hero-social-links">
              <a href="mailto:nitinshukla1912@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Email">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a href="https://scholar.google.com/citations?user=5bz5rmAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="social-icon" title="Google Scholar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
                </svg>
              </a>
              <a href="https://github.com/nitinShukla1912" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/nitin-shukla-53b218189" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAboutSection;
