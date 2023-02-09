import Resume from "../resume/jennifer-kiesler-resume.pdf"

const ResumePage = props => {
  return (
    <div className="container">
      <div className="row justify-content-center text-center mt-5">
        <h3 className="fs-1">Download my <a className="resume" href={Resume} download target="_blank" rel="noreferrer">Resume <i className="bi bi-cloud-arrow-down"></i></a></h3>
      </div>
      <div className="row col justify-content-center text-center mt-5">
        <div className="col-5">
          <h3 className="fs-2 fst-italic text-decoration-underline">Front-end Skills</h3>
          <ul className="fs-4 p-0">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Handlebars</li>
            <li>React</li>
          </ul>
        </div>
        <div className="col-5">
          <h3 className="fs-2 fst-italic text-decoration-underline">Back-end Skills</h3>
          <ul className="fs-4 p-0">
            <li>REST APIs</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ResumePage