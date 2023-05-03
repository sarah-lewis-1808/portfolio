import React from 'react'

const About = () => {
  return (
    <>
      <section id="about">
        <div className="about">
          <img src="/images/catface.jpg" alt="picture of sarah with a cat" />
          <div>
            <p>{`Hi, I'm Sarah`}</p>
            <p>{`Creative thinker, thoughtful problem solver and perpetual learner`}</p>
            <p>{`Currently looking for a software development role that will allow me to expand on my full stack experiences and showcase my communication and teamwork skills`}</p>
            <p>{`based in Tāmaki Makaurau, Auckland`}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
