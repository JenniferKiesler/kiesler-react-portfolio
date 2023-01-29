const Project = ({ project, hovered, setHovered, projectID, setProjectID }) => {
  const { id, img, title, description, tech, deployed_url, github } = project

  let cardBodyClass
  let imgClass

  if (hovered && projectID === id) {
    cardBodyClass = 'card-body position-absolute top-0 start-0'

    imgClass = "card-img-top position-relative faded"

  } else {
    cardBodyClass = 'card-body position-absolute top-0 start-0 hidden'

    imgClass = "card-img-top position-relative"
  }
  
  return (
    <div className="col">
      <div 
        className="card"
        onMouseEnter={() => {
          setHovered(true)
          setProjectID(id)
        }}
        onMouseLeave={() => {
          setHovered(false)
        }}
      >
        <img id={id} src={img} className={imgClass}
        />
        <div 
          id={id}
          className={cardBodyClass}
        >
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{tech}</p>
        </div>
      </div>
    </div>
  )
}

export default Project