import React, { memo, useMemo, useState } from 'react';
import publicationsData from '../data/publicationsData.js';

// Memoized publication item component with enhanced features
const PublicationItem = memo(({ pub }) => {
  const [showAbstract, setShowAbstract] = useState(false);
  const [showBibtex, setShowBibtex] = useState(false);

  // Function to format authors and highlight "Shukla, Nitin" or "Nitin Shukla"
  const formatAuthors = (authorString) => {
    const parts = authorString.split(/(\bShukla, Nitin\b|\bNitin Shukla\b)/gi);
    return parts.map((part, idx) => {
      if (part && (part.toLowerCase().includes('shukla, nitin') || part.toLowerCase().includes('nitin shukla'))) {
        return <strong key={idx}>{part}</strong>;
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <div className="publication-item">
      <p className="publication-authors">
        {formatAuthors(pub.authors)}
      </p>
      <p className="publication-title">
        {pub.link ? (
          <a href={pub.link} target="_blank" rel="noopener noreferrer">
            {pub.title}
          </a>
        ) : (
          pub.title
        )}
      </p>
      <p className="publication-venue">
        <em>{pub.journal}</em>, {pub.year}
      </p>

      {/* Action buttons */}
      <div className="publication-actions">
        {pub.pdf && (
          <a href={pub.pdf} target="_blank" rel="noopener noreferrer">
            PDF
          </a>
        )}
        {pub.abstract && (
          <button onClick={() => setShowAbstract(!showAbstract)}>
            {showAbstract ? 'Hide' : 'Abstract'}
          </button>
        )}
        {pub.bibtex && (
          <button onClick={() => setShowBibtex(!showBibtex)}>
            {showBibtex ? 'Hide' : 'BibTeX'}
          </button>
        )}
        {pub.doi && (
          <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
            DOI
          </a>
        )}
      </div>

      {/* Expandable abstract section */}
      {showAbstract && pub.abstract && (
        <div className="publication-abstract">
          {pub.abstract}
        </div>
      )}

      {/* Expandable BibTeX section */}
      {showBibtex && pub.bibtex && (
        <pre className="publication-bibtex">{pub.bibtex}</pre>
      )}
    </div>
  );
});

PublicationItem.displayName = 'PublicationItem';

const PublicationsSection = () => {
  // Memoize the data
  const publications = useMemo(() => publicationsData, []);

  // Group publications by year
  const publicationsByYear = useMemo(() => {
    const grouped = publications.reduce((acc, pub) => {
      if (!acc[pub.year]) {
        acc[pub.year] = [];
      }
      acc[pub.year].push(pub);
      return acc;
    }, {});
    return grouped;
  }, [publications]);

  // Get years sorted in descending order
  const years = useMemo(() => {
    return Object.keys(publicationsByYear).sort((a, b) => parseInt(b) - parseInt(a));
  }, [publicationsByYear]);

  return (
    <section id="publications" className="publications-section">
      <div className="section-container">
        <h2 className="section-title">publications</h2>
        <div className="publications-content">
          {years.map(year => (
            <div key={year} className="publication-year-group">
              <h3 className="publication-year">{year}</h3>
              {publicationsByYear[year].map((pub, idx) => (
                <PublicationItem key={`${year}-${idx}`} pub={pub} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(PublicationsSection);
