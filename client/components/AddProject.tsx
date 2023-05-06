import type { Project } from '../../models/Project'

import { useState } from 'react'

interface Props {
  onAdd: (project: Project) => void
  onClose: () => void
}

const emptyProject: Project = {} as Project

function AddProject({ onAdd, onClose }: Props) {
  const [newProject, setNewProject] = useState(emptyProject)

  const { name, intro, link, image, reflection } = newProject

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewProject({
      ...newProject,
      [name]: value,
      [intro]: value,
      [link]: value,
      [image]: value,
      [reflection]: reflection,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onAdd(newProject)
  }

  return (
    <>
      <h2>Add new</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
        />

        <label htmlFor="intro">Intro:</label>
        <input
          type="text"
          name="intro"
          id="name"
          value={intro}
          onChange={handleChange}
        />

        <label htmlFor="link">Link:</label>
        <input
          type="text"
          name="link"
          id="name"
          value={link}
          onChange={handleChange}
        />

        <label htmlFor="image">Image:</label>
        <input
          type="text"
          name="image"
          id="name"
          value={image}
          onChange={handleChange}
        />

        <label htmlFor="reflection">Reflection:</label>
        <input
          type="text"
          name="reflection"
          id="name"
          value={reflection}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={name === '' || intro === '' || link === ''}
        >
          Add project
        </button>
        <button onClick={onClose}>Close</button>
      </form>
    </>
  )
}

export default AddProject
