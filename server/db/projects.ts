import connection from './connection'
import type { Project } from '../../models/Project'

export function getProjects(db = connection): Promise<Project[]> {
  return db('projects').select()
}

export function addProject(
  newProject: Project,
  db = connection
): Promise<Project> {
  return db('projects').insert(newProject)
}
