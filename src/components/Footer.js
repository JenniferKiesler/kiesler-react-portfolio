const Footer = props => {
  return (
    <footer className="fixed-bottom d-flex justify-content-center p-3">
      <a href="https://github.com/JenniferKiesler" target="_blank">
        <i className="bi bi-github m-3 fs-3"></i>
      </a>
      <a href="https://www.linkedin.com/in/jennifer-kiesler-aa469591/" target="_blank">
        <i className="bi bi-linkedin m-3 fs-3"></i>
      </a>
      <a href="mailto:kiesler.jen@gmail.com">
        <i className="bi bi-envelope-fill m-3 fs-3"></i>
      </a>
      <a href="tel:12629948243">
        <i className="bi bi-telephone-fill m-3 fs-3"></i>
      </a>
    </footer>
  )
}

export default Footer