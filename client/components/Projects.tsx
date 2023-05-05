import { getProjects } from '../apis/projects'

const Projects = () => {
  const projects = getProjects()

  return (
    <>
      <section id="projects">
        <div className="project">
          <h3>SIMS Scribble98</h3>
          <p>
            Collaborative drawing game co-developed as part of Dev Academy final
            project
          </p>
          <a
            href="https://sims-scribble98.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Check it out</button>
          </a>
        </div>
        <div className="project">
          <h3>PORTFOLIO</h3>
          <p>Check out the plans for this portfolio</p>
          <a
            href="https://www.figma.com/file/1A1LD0UUwydAiu5fTh33HT/Untitled?node-id=2%3A597&t=OxdMVuiifidvObmG-1"
            target="_blank"
            rel="noreferrer"
          >
            <button>Check it out</button>
          </a>
        </div>
        <div className="project">
          <h3>TODO FULL STACK</h3>
          <p>My first full stack project deployment</p>
          <a
            href="https://sarah-todo-fullstack.devacademy.online/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Check it out</button>
          </a>
        </div>
      </section>
    </>
  )
}

export default Projects
