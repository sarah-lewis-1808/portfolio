import request from 'superagent'

const rootUrl = '/api/v1'

export function getProjects(): Promise<string[]> {
  return request
    .get(rootUrl + '/projects')
    .then((res: { body: { projects: any } }) => {
      return res.body.projects
    })
}
