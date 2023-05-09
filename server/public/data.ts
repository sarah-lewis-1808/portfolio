import { Project } from '../../models/Project'

const projects: Project[] = [
  {
    name: 'SIMS Scribble98',
    intro: 'Collaborative multi player drawing game',
    tech: 'Typescript | TailwindCSS | React',
    link: 'https://sims-scribble98.netlify.app/',
    image: '/images/SIMS-Scribble98.png',
    reflection: [
      'As part of our final project for Dev Academy we co-developed a game based on the concept of `telephone` as a team of 4. The game begins with player 1 providing an initial caption for player 2 to draw, then the next player describes that drawing - and so on. The end result is a number of captions and illustrations that progressively become more unhinged with the more players involved!',
      'The main technologies we used were Typescript, React, TailwindCSS. Data is stored in an SQLite database and the user drawn images were captured and converted to svg files to reference later.',
      '',
    ],
  },
  {
    name: 'Portfolio',
    intro: 'Creative portfolio to display my skills and interests',
    tech: 'Typescript | CSS | React',
    link: '#',
    image: 'server/public/images/portfolio.png',
    reflection: [
      'I`ve been so excited about knowing so many new skills that I`ve been having trouble deciding what to use to accurately showcase my abilities! ',
    ],
  },
  {
    name: 'ToDo List',
    intro: 'Deployed full stack web app with simple todo list functionality',
    tech: 'Typescript | SCSS | React',
    link: 'https://sarah-todo-fullstack.devacademy.online/',
    image: '/images/todo-fullstack.png',
    reflection: [
      'This project was part of our assessment for Dev Academy where we were instructed to deploy a full stack web application using the skills we had learned over the course of 15 weeks.',
      'The main technologies used is Typescript, HTML, React, Redux',
      'I really enjoyed creating this app as the template for the styling was provided and our aim was to create the functionality. This allowed me to understand the full stack in more detail as I was responsible for creating the connections between the front and back end of the app and also the deployment.',
    ],
  },
]

export default projects
