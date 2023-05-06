import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchProjects } from '../slices/projects'

const Projects = () => {
  const projects = useAppSelector((state) => state.projects)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProjects())
  }, [])

  return (
    <section id="projects">
      {projects.map((project, index) => (
        <>
          <div className="project">
            <h3 key={index}>{project.name}</h3>
            <p key={index}>{project.intro}</p>
            <a href={project.link}>
              <button>Check it out</button>
            </a>
          </div>
        </>
      ))}
    </section>
  )
}

export default Projects
