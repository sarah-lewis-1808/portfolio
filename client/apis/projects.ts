import request from 'superagent'

const rootUrl = '/api/v1'

export async function getProjects(): Promise<string[]> {
  const res = await request.get(rootUrl + '/projects')
  return res.body.projects
}
