import request from 'superagent'
import { Project } from '../../models/Project'

const rootUrl = '/api/v1'

export async function getProjects(): Promise<Project[]> {
  const res = await request.get(rootUrl + '/projects')
  console.log(res.body)
  return res.body
}
