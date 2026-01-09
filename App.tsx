
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './components/HomePage';
import CountryDetail from './components/CountryDetail';
import PackageDetail from './components/PackageDetail';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:country" element={<CountryDetail />} />
        <Route path="/:country/:packageId" element={<PackageDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HelmetProvider>
  );
};

export default App;
