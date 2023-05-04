/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    {
      id: 1,
      name: 'SIMS Scribble98',
      intro:
        'Collaborative drawing game co-developed as part of Dev Academy final project',
      link: '',
      image: 'images/SIMS-Scribble98.png',
      reflection: '',
    },
    {
      id: 2,
      name: 'Portfolio',
      intro: 'Check out the plans for this portfolio',
      link: '',
      image: 'image/portfolio.png',
      reflection:
        'Creating a portfolio to show my skills and experience has been really fun. I have really enjoyed the creative freedom and possibilities to explore new tech.',
    },
    {
      id: 3,
      name: 'Todo Full Stack',
      intro: 'My first full stack project deployment',
      link: '',
      image: 'images/todo-fullstack.png',
      reflection:
        'The aim of this project was to set up a full stack application and deploy to the web.',
    },
  ])
}
