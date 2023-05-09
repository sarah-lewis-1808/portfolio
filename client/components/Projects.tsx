import projects from '../../server/public/data'

const Projects = () => {
  return (
    <section id="projects">
      <div className="wrapper">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3 key={project.name}>{project.name}</h3>
            <p key={project.intro}>{project.intro}</p>
            <p key={project.tech}></p>
            <a key={project.link} href={project.link}>
              <button key={`${project.name} button`}>Check it out</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
