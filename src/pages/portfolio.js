import { useState } from "react"
import Project from "../components/Project"
import ProjectData from "../components/ProjectData"

const PortfolioPage = props => {
  const [projects, setProjects] = useState(ProjectData)
  const [hovered, setHovered] = useState(false)
  const [projectID, setProjectID] = useState('')

  return (
    <>
      <div className="col-11 col-md-8 mt-4 mx-auto">
        {projects.map(project => {
          return (
            <Project 
              project={project}
              key={project.id}
              hovered={hovered}
              setHovered={setHovered}
              projectID={projectID}
              setProjectID={setProjectID}
            />
          )
        })}
      </div>
    </>
  )
}

export default PortfolioPage