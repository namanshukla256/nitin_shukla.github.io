# Script References

This document provides a comprehensive reference of all JavaScript/JSX scripts in the project, organized by category.

---

## Configuration Files

### [eslint.config.js](file:///e:/nitinShukla1912.github.io/eslint.config.js)
- **Namespace**: Root
- **Description**: ESLint configuration for React project with custom rules for unused variables and JSX support.

### [postcss.config.js](file:///e:/nitinShukla1912.github.io/postcss.config.js)
- **Namespace**: Root
- **Description**: PostCSS configuration that enables TailwindCSS and Autoprefixer plugins for CSS processing.

### [tailwind.config.js](file:///e:/nitinShukla1912.github.io/tailwind.config.js)
- **Namespace**: Root
- **Description**: TailwindCSS configuration with custom color schemes (primary, accent, bio), fonts, animations, and dark mode support.

### [vite.config.js](file:///e:/nitinShukla1912.github.io/vite.config.js)
- **Namespace**: Root
- **Description**: Vite build configuration with React plugin, terser minification, code splitting, and production optimizations.

---

## Application Core

### [src/main.jsx](file:///e:/nitinShukla1912.github.io/src/main.jsx)
- **Namespace**: Root
- **Description**: Application entry point that renders the React app with StrictMode enabled.

### [src/App-redesign.jsx](file:///e:/nitinShukla1912.github.io/src/App-redesign.jsx)
- **Namespace**: App
- **Description**: Main application component that composes all sections (Navbar, Hero, News, Projects, Patents, Publications, Footer).

---

## Components

### [src/components/Navbar.jsx](file:///e:/nitinShukla1912.github.io/src/components/Navbar.jsx)
- **Namespace**: Navbar
- **Description**: Responsive navigation bar component with hamburger menu, section links, and beta badge.

### [src/components/Footer.jsx](file:///e:/nitinShukla1912.github.io/src/components/Footer.jsx)
- **Namespace**: Footer
- **Description**: Footer component with social links (Email, LinkedIn, GitHub, Google Scholar) and copyright notice.

### [src/components/HeroAboutSection.jsx](file:///e:/nitinShukla1912.github.io/src/components/HeroAboutSection.jsx)
- **Namespace**: HeroAboutSection
- **Description**: Hero section with profile picture, bio, social icons, and detailed about section highlighting research interests.

### [src/components/News.jsx](file:///e:/nitinShukla1912.github.io/src/components/News.jsx)
- **Namespace**: News
- **Description**: Memoized news section component that displays recent news items with dates and optional links from news data.

### [src/components/ProjectsSection.jsx](file:///e:/nitinShukla1912.github.io/src/components/ProjectsSection.jsx)
- **Namespace**: ProjectsSection
- **Description**: Memoized projects section that renders project cards with titles, descriptions, links, and optional images.

### [src/components/PublicationsSection.jsx](file:///e:/nitinShukla1912.github.io/src/components/PublicationsSection.jsx)
- **Namespace**: PublicationsSection
- **Description**: Memoized publications section displaying academic papers with authors, titles, journals, and optional PDF links.

### [src/components/PatentsSection.jsx](file:///e:/nitinShukla1912.github.io/src/components/PatentsSection.jsx)
- **Namespace**: PatentsSection
- **Description**: Patents section component showcasing patent applications with title, status, year, and description.

---

## Data Files

### [src/data/news-updated.js](file:///e:/nitinShukla1912.github.io/src/data/news-updated.js)
- **Namespace**: newsData
- **Description**: Static data array containing recent news items with dates, text, and optional links for the news section.

### [src/data/projects-updated.js](file:///e:/nitinShukla1912.github.io/src/data/projects-updated.js)
- **Namespace**: projectsData
- **Description**: Static data array containing research projects with titles, descriptions, links, and year ranges for the projects section.

### [src/data/publicationsData.js](file:///e:/nitinShukla1912.github.io/src/data/publicationsData.js)
- **Namespace**: publicationsData
- **Description**: Static data array containing academic publications with authors, titles, journals, years, and optional PDF links.

---

## Quick Navigation

| Category | Files |
|----------|-------|
| **Config** | [eslint.config.js](file:///e:/nitinShukla1912.github.io/eslint.config.js), [postcss.config.js](file:///e:/nitinShukla1912.github.io/postcss.config.js), [tailwind.config.js](file:///e:/nitinShukla1912.github.io/tailwind.config.js), [vite.config.js](file:///e:/nitinShukla1912.github.io/vite.config.js) |
| **Core** | [main.jsx](file:///e:/nitinShukla1912.github.io/src/main.jsx), [App-redesign.jsx](file:///e:/nitinShukla1912.github.io/src/App-redesign.jsx) |
| **Layout** | [Navbar.jsx](file:///e:/nitinShukla1912.github.io/src/components/Navbar.jsx), [Footer.jsx](file:///e:/nitinShukla1912.github.io/src/components/Footer.jsx) |
| **Sections** | [HeroAboutSection.jsx](file:///e:/nitinShukla1912.github.io/src/components/HeroAboutSection.jsx), [News.jsx](file:///e:/nitinShukla1912.github.io/src/components/News.jsx), [ProjectsSection.jsx](file:///e:/nitinShukla1912.github.io/src/components/ProjectsSection.jsx), [PublicationsSection.jsx](file:///e:/nitinShukla1912.github.io/src/components/PublicationsSection.jsx), [PatentsSection.jsx](file:///e:/nitinShukla1912.github.io/src/components/PatentsSection.jsx) |
| **Data** | [news-updated.js](file:///e:/nitinShukla1912.github.io/src/data/news-updated.js), [projects-updated.js](file:///e:/nitinShukla1912.github.io/src/data/projects-updated.js), [publicationsData.js](file:///e:/nitinShukla1912.github.io/src/data/publicationsData.js) |

---

## Architecture Overview

```
Root
├── Configuration Files (Build & Tooling)
│   ├── eslint.config.js - Linting rules
│   ├── postcss.config.js - CSS processing
│   ├── tailwind.config.js - Styling framework
│   └── vite.config.js - Build configuration
│
├── Application Entry Point
│   └── src/main.jsx - React app initialization
│
└── Application Structure
    ├── src/App-redesign.jsx - Main app component
    │
    ├── Components (UI Architecture)
    │   ├── Navbar.jsx - Navigation
    │   ├── HeroAboutSection.jsx - Hero & About
    │   ├── News.jsx - News timeline
    │   ├── ProjectsSection.jsx - Research projects
    │   ├── PatentsSection.jsx - Patents
    │   ├── PublicationsSection.jsx - Academic papers
    │   └── Footer.jsx - Contact & social links
    │
    └── Data (Content Management)
        ├── news-updated.js - News items
        ├── projects-updated.js - Project details
        └── publicationsData.js - Publication records
```

---

## Component Dependencies

- **App-redesign.jsx** → Imports all section components
- **News.jsx** → Uses `src/data/news-updated.js`
- **ProjectsSection.jsx** → Uses `src/data/projects-updated.js`
- **PublicationsSection.jsx** → Uses `src/data/publicationsData.js`
- All components use React hooks (useState, useMemo, memo) for performance optimization

---

## Usage Notes

1. **When searching for navigation logic**, refer to [Navbar.jsx](file:///e:/nitinShukla1912.github.io/src/components/Navbar.jsx)
2. **When updating news items**, edit [news-updated.js](file:///e:/nitinShukla1912.github.io/src/data/news-updated.js)
3. **When adding projects**, modify [projects-updated.js](file:///e:/nitinShukla1912.github.io/src/data/projects-updated.js)
4. **When adding publications**, update [publicationsData.js](file:///e:/nitinShukla1912.github.io/src/data/publicationsData.js)
5. **For styling changes**, check [tailwind.config.js](file:///e:/nitinShukla1912.github.io/tailwind.config.js) for custom theme
6. **For build optimization**, refer to [vite.config.js](file:///e:/nitinShukla1912.github.io/vite.config.js)

---

*Last Updated: 2026-01-25*
