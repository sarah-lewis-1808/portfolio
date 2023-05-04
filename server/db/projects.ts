import connection from './connection'
import type { Project } from '../../models/Project'

export function getProjects(db = connection): Promise<Project[]> {
  return db('project').select()
}
