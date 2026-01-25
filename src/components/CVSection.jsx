import React from 'react';

const CVSection = () => {
  const education = [
    {
      degree: "PhD in Applied Sciences & Technology",
      institution: "Gujarat Technology University",
      year: "2021 - Present",
      description: "Focus on wastewater-based epidemiology, genomics, and computational biology"
    },
    {
      degree: "MSc in Biotechnology (Gold Medal, First Class with Distinction)",
      institution: "Parul University",
      year: "2019 - 2021",
      description: null
    },
    {
      degree: "BSc in Biotechnology (First Class)",
      institution: "Parul University",
      year: "2016 - 2019",
      description: null
    }
  ];

  const experience = [
    {
      title: "Senior Research Fellow",
      organization: "Gujarat Biotechnology Research Centre (GBRC)",
      year: "2021 - Present",
      description: "Wastewater surveillance, genomic analysis, bioinformatics, and viral evolution studies"
    }
  ];

  const awards = [
    {
      title: "Gold Medal in MSc Biotechnology",
      organization: "Parul University",
      year: "2021",
      description: "First Class with Distinction"
    }
  ];

  return (
    <section id="cv" className="cv-section">
      <div className="section-container">
        <h2 className="section-title">curriculum vitae</h2>

        {/* Education */}
        <div className="cv-subsection">
          <h3 className="cv-subsection-title">education</h3>
          {education.map((item, idx) => (
            <div key={idx} className="cv-item">
              <div className="cv-item-header">
                <h4 className="cv-item-title">{item.degree}</h4>
                <span className="cv-item-year">{item.year}</span>
              </div>
              <p className="cv-item-institution">{item.institution}</p>
              {item.description && (
                <p className="cv-item-description">{item.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="cv-subsection">
          <h3 className="cv-subsection-title">experience</h3>
          {experience.map((item, idx) => (
            <div key={idx} className="cv-item">
              <div className="cv-item-header">
                <h4 className="cv-item-title">{item.title}</h4>
                <span className="cv-item-year">{item.year}</span>
              </div>
              <p className="cv-item-institution">{item.organization}</p>
              <p className="cv-item-description">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Awards & Honors */}
        <div className="cv-subsection">
          <h3 className="cv-subsection-title">awards & honors</h3>
          {awards.map((item, idx) => (
            <div key={idx} className="cv-item">
              <div className="cv-item-header">
                <h4 className="cv-item-title">{item.title}</h4>
                <span className="cv-item-year">{item.year}</span>
              </div>
              <p className="cv-item-institution">{item.organization}</p>
              {item.description && (
                <p className="cv-item-description">{item.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Download CV */}
        <div className="cv-download">
          <a href="mailto:nitinshukla1912@gmail.com" className="cv-download-link">
            Contact for CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
