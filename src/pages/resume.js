import Resume from "../resume/jennifer-kiesler-resume.pdf"

const ResumePage = props => {
  return (
    <div className="container">
      <div className="row justify-content-center text-center mt-5">
        <h3 className="fs-1">Download my <a className="resume" href={Resume} download target="_blank" rel="noreferrer">Resume <i className="bi bi-cloud-arrow-down"></i></a></h3>
      </div>
      <div className="row d-flex flex-wrap justify-content-around text-center mt-4">
        <div id="frontend" className="card col-10 col-sm-5 col-lg-3 px-0 m-3 h-100">
          <h3 id="frontend-header" className="fs-2 py-3 mb-0 fst-italic">Front-end Skills</h3>
          <ul className="list-group list-group-flush border-top-0 w-100 fs-4 p-0">
            <li className="list-group-item">HTML</li>
            <li className="list-group-item">CSS</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">jQuery</li>
            <li className="list-group-item">Bootstrap</li>
            <li className="list-group-item">Handlebars</li>
            <li className="list-group-item">React</li>
          </ul>
        </div>
        <div id="backend" className="card col-10 col-sm-5 col-lg-3 px-0 m-3 h-100">
          <h3 id="backend-header" className="fs-2 py-3 mb-0 fst-italic">Back-end Skills</h3>
          <ul className="list-group list-group-flush border-top-0 w-100 fs-4 p-0">
            <li className="list-group-item">REST APIs</li>
            <li className="list-group-item">Node.js</li>
            <li className="list-group-item">Express.js</li>
            <li className="list-group-item">MySQL</li>
            <li className="list-group-item">Sequelize</li>
            <li className="list-group-item">MongoDB</li>
            <li className="list-group-item">Mongoose</li>
            <li className="list-group-item">GraphQL</li>
          </ul>
        </div>
        <div id="transferable" className="card col-10 col-sm-6 col-lg-4 px-0 m-3 h-100">
          <h3 id="transferable-header" className="fs-2 py-3 mb-0 fst-italic">Transferable Skills</h3>
          <ul className="list-group list-group-flush border-top-0 w-100 fs-4 p-0">
            <li className="list-group-item">Problem-solving</li>
            <li className="list-group-item">Collaboration</li>
            <li className="list-group-item">Communication</li>
            <li className="list-group-item">Adaptability</li>
            <li className="list-group-item">Time Management</li>
            <li className="list-group-item">Multitasking</li>
            <li className="list-group-item">Organization</li>
            <li className="list-group-item">Self-motivated</li>
            <li className="list-group-item">Decision-making</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ResumePage