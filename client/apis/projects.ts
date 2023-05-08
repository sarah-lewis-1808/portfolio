import request from 'superagent'
import { Project } from '../../models/Project'

const rootUrl: string =
  process.env.NODE_ENV === 'production'
    ? 'https://sarah-lewis.netlify.app/.netlify/functions/addProjectApi'
    : 'http://localhost:3000/api/v1'

export async function getProjects(): Promise<Project[]> {
  const res = await request.get(rootUrl + '/projects')
  return res.body
}

// export async function addProject(
//   newProject: Project,
//   token: string
// ): Promise<Project> {
//   const res = await request
//     .post('${rootUrl}/projects')
//     .set('Authorization', `Bearer ${token}`)
//     .send(newProject)
//   return res.body
// }
