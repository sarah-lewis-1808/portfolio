import projects from '../../server/public/data'

const Projects = () => {
  return (
    <section id="projects">
      <div className="wrapper">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3 key={project.name}>{project.name}</h3>
            <img src={project.image} alt="project thumbnail" />
            <p key={project.intro}>{project.intro}</p>
            <a key={project.link} href={project.link}>
              <button key={`${project.name} button`}>CHECK IT OUT</button>
            </a>
            <p className={'tech'} key={project.tech}>
              {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
