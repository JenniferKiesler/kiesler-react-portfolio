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
  const [view, setView] = useState('about')

  const renderView = () => {
    if (view === 'about') {
      return <AboutMePage />
    } else if (view === 'portfolio') {
      return <PortfolioPage />
    } else if (view === 'contact') {
      return <ContactPage />
    } else if (view === 'resume') {
      return <ResumePage />
    } else {
      return 'No matching view found'
    }
  }

  return (
    <>
      <Header 
        view={view}
        setView={setView}
      />
      { renderView() }
      <Footer />
    </>
  );
}

export default App;
