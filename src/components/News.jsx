import React, { memo, useMemo } from 'react';
import newsData from '../data/news-updated.js';

// Memoized news item component
const NewsItem = memo(({ item }) => (
  <li className="news-item">
    <span className="news-date">• {item.date}:</span>
    <span className="news-text">{item.text}</span>
    {item.link && (
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="news-link">
        {item.linkText}
      </a>
    )}
  </li>
));

NewsItem.displayName = 'NewsItem';

const News = () => {
  // Memoize the data to prevent unnecessary re-renders
  const news = useMemo(() => newsData, []);

  return (
    <section id="news" className="news-section">
      <div className="section-container">
        <h2 className="section-title">news</h2>
        <div className="news-content">
          <ul className="news-list">
            {news.map((item, index) => (
              <NewsItem key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(News);