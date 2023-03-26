const Footer = props => {
  return (
    <footer className="">
      <div className="d-flex justify-content-center flex-wrap pb-1">
        <a className="mt-3 mx-3" href="https://github.com/JenniferKiesler" target="_blank" rel="noreferrer">
          <i className="bi bi-github m-3 fs-2"></i>
        </a>
        <a className="mt-3 mx-3" href="https://www.linkedin.com/in/jennifer-kiesler-aa469591/" target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin m-3 fs-2"></i>
        </a>
        <a className="mt-3 mx-3" href="mailto:kiesler.jen@gmail.com">
          <i className="bi bi-envelope-at-fill m-3 fs-2"></i>
        </a>
        <a className="mt-3 mx-3" href="tel:12629948243">
          <i className="bi bi-telephone-fill m-3 fs-2"></i>
        </a>
      </div>
      <p className="mt-3 ms-3">&copy; Jennifer Kiesler 2023</p>
    </footer>
  )
}

export default Footer