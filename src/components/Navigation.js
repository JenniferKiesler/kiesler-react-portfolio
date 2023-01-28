const Navigation = ({ view, setView }) => {
  return (
    <ul className="navbar-nav fs-3">
      <li className="nav-item">
        <a 
          onClick={() => setView('about')}
          className={`nav-link ${view === 'about' ? 'active fw-bold' : ''}`}  
          href="#"
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a 
          onClick={() => setView('portfolio')}
          className={`nav-link ${view === 'portfolio' ? 'active fw-bold' : ''}`} 
          href="#"
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a 
          onClick={() => setView('contact')}
          className={`nav-link ${view === 'contact' ? 'active fw-bold' : ''}`} 
          href="#"
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a 
          onClick={() => setView('resume')}
          className={`nav-link ${view === 'resume' ? 'active fw-bold' : ''}`} 
          href="#"
        >
          Resume
        </a>
      </li>
    </ul>
  )
}

export default Navigation