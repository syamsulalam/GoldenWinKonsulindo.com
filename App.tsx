import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TeamMemberPage from './pages/TeamMemberPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import IndustriesPage from './pages/IndustriesPage';

// Component to scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Don't scroll to top for hash links on the same page
    if (window.location.hash) return;
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <div className="bg-brand-light text-brand-dark font-sans">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team/:memberId" element={<TeamMemberPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;