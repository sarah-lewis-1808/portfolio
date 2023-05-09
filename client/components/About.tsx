const About = () => {
  return (
    <>
      <section id="about">
        <div className="wrapper">
          <div id="about-left">
            <div id="profile-pic">
              <img src="/images/catface.jpg" alt="sarah with a cat" />{' '}
            </div>
          </div>
          <div id="bio">
            <h3>{`Kia ora, I'm Sarah`}</h3>
            <p>{`Creative thinker, thoughtful problem solver, avid planner and perpetual learner.`}</p>
            <p>{`Looking for a software development role that will allow me to expand on my full stack experiences and showcase my communication and teamwork skills.`}</p>
            <p>{`Currently based in Tāmaki Makaurau, Auckland`}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
