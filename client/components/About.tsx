import React from 'react'

const About = () => {
  return (
    <>
      <section id="about">
        <div className="about">
          <img src="/images/catface.jpg" alt="sarah with a cat" />
        </div>
        <div className="about-me-text">
          <h3>{`Kia ora, I'm Sarah`}</h3>
          <p>{`Creative thinker, thoughtful problem solver, avid planner and perpetual learner.`}</p>
          <p>{`Looking for a software development role that will allow me to expand on my full stack experiences and showcase my communication and teamwork skills.`}</p>
          <p>{`Currently based in Tāmaki Makaurau, Auckland`}</p>
        </div>
      </section>
    </>
  )
}

export default About
