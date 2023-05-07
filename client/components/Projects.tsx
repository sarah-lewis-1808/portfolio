import { useQuery } from 'react-query'
import { getProjects } from '../apis/projects'
import { Project } from '../../models/Project'

const Projects = () => {
  const {
    data: projects,
    isLoading,
    error,
  } = useQuery<Project[]>('projects', getProjects)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: error</div>
  }

  return (
    <section id="projects">
      {projects?.map((project, index) => (
        <div key={index} className="project">
          <h3 key={project.name}>{project.name}</h3>
          <p key={project.intro}>{project.intro}</p>
          <a key={project.link} href={project.link}>
            <button key={`${project.name} button`}>Check it out</button>
          </a>
        </div>
      ))}
    </section>
  )
}

export default Projects
