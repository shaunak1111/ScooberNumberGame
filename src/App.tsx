import React, { Suspense, lazy } from 'react';
import './App.css';
import Home from './views/Home/Home';

const Footer = lazy(() => import('./common/components/Footer'));
const NavBar = lazy(() => import('./common/components/NavBar'));


function App() {
  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <NavBar />
      <Home />
      <Footer />
    </Suspense>
  );
}

export default App;
