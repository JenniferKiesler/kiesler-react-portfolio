import './App.css';
import { useState } from 'react'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMePage from './pages/about'
import PortfolioPage from './pages/portfolio'
import ContactPage from './pages/contact'
import ResumePage from './pages/resume'

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Footer />
    </>
  );
}

export default App;
