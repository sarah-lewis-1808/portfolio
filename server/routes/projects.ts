import express from 'express'

import * as db from '../db/projects'

const router = express.Router()

router.get('/', (req, res) => {
  db.getProjects()
    .then((results: any[]) => {
      res.json({ projects: results.map((project) => project.name) })
    })
    .catch((err: any) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

export default router
