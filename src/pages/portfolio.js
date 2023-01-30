import { useState } from "react"
import Project from "../components/Project"
import ProjectData from "../components/ProjectData"

const PortfolioPage = props => {
  const [projects, setProjects] = useState(ProjectData)
  const [hovered, setHovered] = useState(false)
  const [projectID, setProjectID] = useState('')

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-5 mt-3 mx-auto">
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