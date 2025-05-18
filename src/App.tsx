import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import SolutionsPage from './pages/SolutionsPage';
import ResourcesPage from './pages/ResourcesPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import CareersPage from './pages/CareersPage';

// Service Pages
import CyberDefensePage from './pages/services/CyberDefensePage';
import CyberResearchPage from './pages/services/CyberResearchPage';
import CyberOperationsPage from './pages/services/CyberOperationsPage';
import SecurityAuditPage from './pages/services/SecurityAuditPage';
import ConsultingPage from './pages/services/ConsultingPage';

// Resource Pages
import NewsPage from './pages/resources/NewsPage';
import WebinarsPage from './pages/resources/WebinarsPage';
import WhitePapersPage from './pages/resources/WhitePapersPage';
import CaseStudiesPage from './pages/resources/CaseStudiesPage';
import BlogPage from './pages/resources/BlogPage';
import CommunityPage from './pages/resources/CommunityPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />

            {/* Service Routes */}
            <Route path="/services/cyber-defense" element={<CyberDefensePage />} />
            <Route path="/services/cyber-research" element={<CyberResearchPage />} />
            <Route path="/services/cyber-operations" element={<CyberOperationsPage />} />
            <Route path="/security-audit" element={<SecurityAuditPage />} />
            <Route path="/services/consulting" element={<ConsultingPage />} />

            {/* Resource Routes */}
            <Route path="/news" element={<NewsPage />} />
            <Route path="/webinars" element={<WebinarsPage />} />
            <Route path="/resources/white-papers" element={<WhitePapersPage />} />
            <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/community" element={<CommunityPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;