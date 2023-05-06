import express from 'express'

import * as db from '../db/projects'

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

export default router
