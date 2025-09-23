import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import OurStory from './components/OurStory';
import FAQ from './components/FAQ';

type Page = 'home' | 'story' | 'faq';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Add meta tag to prevent indexing
  useEffect(() => {
    const metaTag = document.createElement('meta');
    metaTag.name = 'robots';
    metaTag.content = 'noindex';
    document.head.appendChild(metaTag);

    return () => {
      document.head.removeChild(metaTag);
    };
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {currentPage === 'home' && (
        <LandingPage />
      )}
      {currentPage === 'story' && (
        <OurStory />
      )}
      {currentPage === 'faq' && (
        <FAQ />
      )}
    </div>
  );
}