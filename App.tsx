import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import TeamMemberPage from './pages/TeamMemberPage';
import IndustriesPage from './pages/IndustriesPage';
import CareerPage from './pages/CareerPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ApplicationSuccessPage from './pages/ApplicationSuccessPage';
import ApplicationErrorPage from './pages/ApplicationErrorPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/team/:memberId" element={<TeamMemberPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/insights" element={<ArticleListPage />} />
          <Route path="/insights/:category" element={<ArticleListPage />} />
          <Route path="/article/:articleId" element={<ArticleDetailPage />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/application-success" element={<ApplicationSuccessPage />} />
          <Route path="/application-error" element={<ApplicationErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;