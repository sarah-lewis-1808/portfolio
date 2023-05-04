import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProjects } from '../apis/projects'
const initialState = [] as string[]

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    const projects = await getProjects()
    return projects
  }
)

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      return action.payload
    }),
})

export default projectsSlice.reducer
