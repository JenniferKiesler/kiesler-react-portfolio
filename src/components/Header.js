import Navigation from "./Navigation"

const Header = ({ view, setView }) => {
  return (
    <nav className="navbar navbar-expand-lg p-4">
      <div className="container mx-auto">
        <h1 className="my-name">Jennifer Kiesler</h1>
        <Navigation 
          view={view}
          setView={setView}
        />
      </div>
    </nav>
  )
}

export default Header