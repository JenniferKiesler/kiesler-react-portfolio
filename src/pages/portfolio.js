import { useState } from "react"
import Project from "../components/Project"
import ProjectData from "../components/ProjectData"

const PortfolioPage = props => {
  const [projects, setProjects] = useState(ProjectData)
  const [hovered, setHovered] = useState(false)
  const [projectID, setProjectID] = useState('')

  console.log(projects)
  return (
    <div className="row row-cols-1 row-cols-lg-2 g-4 mt-4 mx-1">
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
  )
}

export default PortfolioPage