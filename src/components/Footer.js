const Footer = props => {
  return (
    <footer className="mt-5">
      <div className="d-flex justify-content-center mt-3 pt-3 pb-1">
        <a href="https://github.com/JenniferKiesler" target="_blank" rel="noreferrer">
          <i className="bi bi-github m-3 fs-2"></i>
        </a>
        <a href="https://www.linkedin.com/in/jennifer-kiesler-aa469591/" target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin m-3 fs-2"></i>
        </a>
        <a href="https://stackoverflow.com/users/21101475/jennifer-kiesler" target="_blank" rel="noreferrer">
          <i className="bi bi-stack-overflow m-3 fs-2"></i>
        </a>
        <a href="mailto:kiesler.jen@gmail.com">
          <i className="bi bi-envelope-at-fill m-3 fs-2"></i>
        </a>
        <a href="tel:12629948243">
          <i className="bi bi-telephone-fill m-3 fs-2"></i>
        </a>
      </div>
      <p className="ms-3">&copy; Jennifer Kiesler 2023</p>
    </footer>
  )
}

export default Footer