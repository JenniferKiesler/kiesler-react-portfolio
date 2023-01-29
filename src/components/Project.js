const Project = ({ project, hovered, setHovered, projectID, setProjectID }) => {
  const { id, img, title, description, tech, deployed_url, github } = project

  let cardBodyClass
  let imgClass

  if (hovered && projectID === id) {
    cardBodyClass = 'card-body position-absolute top-0 start-0 h-100 w-100 p-0'

    imgClass = "card-img-top position-relative faded"

  } else {
    cardBodyClass = 'card-body position-absolute top-0 start-0 hidden'

    imgClass = "card-img-top position-relative"
  }
  
  return (
    <div className="col">
      <div 
        className="card text-center"
        onMouseEnter={() => {
          setHovered(true)
          setProjectID(id)
        }}
        onMouseLeave={() => {
          setHovered(false)
        }}
      >
        <img 
          id={id} 
          src={img} 
          className={imgClass}
        />
        <div 
          id={id}
          className={cardBodyClass}
        >
          <div className="project-links mb-2">
            <a className="card-title fs-2 me-5 mb-0" href={deployed_url} target="_blank">{title}</a>
            <a href={github} target="_blank">
              <i className="bi bi-github fs-2"></i>
            </a>
          </div>
          <div>
            <h3 className="card-text fw-bold fs-5">Description:</h3>
            <p className="card-text fs-6">{description}</p>
            <h3 className="card-text fw-bold fs-5">Technologies Used:</h3>
            <p className="card-text fs-6">{tech}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project