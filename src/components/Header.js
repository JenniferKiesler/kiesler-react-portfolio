import Navigation from "./Navigation"

const Header = ({ view, setView }) => {
  return (
    <nav className="navbar navbar-expand-lg p-4">
      <div className="container">
        <h1 className="nav-name">Jennifer Kiesler</h1>
        <Navigation 
          view={view}
          setView={setView}
        />
      </div>
    </nav>
  )
}

export default Header