import { Project } from '../../models/Project'
import AddProject from './AddProject'

import { useState, useEffect } from 'react'

import { addProject } from '../apis/projects'
import { useAuth0 } from '@auth0/auth0-react'

type State =
  | {
      selectedProject: Project
      show: 'selected'
    }
  | {
      selectedProject: null
      show: 'add' | 'none'
    }
const closedForm: State = {
  selectedProject: null,
  show: 'none',
}

const Admin = () => {
  const [error, setError] = useState('')
  const [project, setProject] = useState<Project>()
  const [form, setForm] = useState<State>(closedForm)

  const { getAccessTokenSilently } = useAuth0()
  const handleAdd = async (newProject: Project) => {
    try {
      const token = await getAccessTokenSilently()
      const project = await addProject(newProject, token)

      setProject(project)
      handleCloseForm()
      hideError()
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      }
    }
  }

  const handleCloseForm = () => {
    setForm(closedForm)
  }

  const hideError = () => {
    setError('')
  }

  return (
    <>
      {error && <button onClick={hideError}>Error: {error}</button>}
      <AddProject onAdd={handleAdd} onClose={handleCloseForm} />
    </>
  )
}

export default Admin
