import express from 'express'
import { Project } from '../../models/Project'
import checkJwt, { JwtRequest } from '../0auth'

import * as db from '../db/projects'
import { addProject } from '../db/projects'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const results = await db.getProjects()
    return res.json(results)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', checkJwt, (req: JwtRequest, res) => {
  const { project } = req.body
  const auth0Id = req.auth?.sub

  if (!auth0Id) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }

  const newProject: Project = {
    auth: auth0Id,
    name: project.name,
    intro: project.intro,
    link: project.link,
    image: project.image,
    reflection: project.reflection,
  }

  addProject(newProject)
    .then(() => db.getProjects())
    .then((projects: Project[]) => res.json({ projects }))
    .catch((err: Error) => {
      console.error(err)
      res.status(500).send('Something went wrong')
    })
})

export default router
