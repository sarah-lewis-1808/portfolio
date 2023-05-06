import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProjects } from '../apis/projects'
import { Project } from '../../models/Project'
const initialState = [{}] as Project[]

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    return await getProjects()
  }
)

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      console.log(action.payload)
      return action.payload
    }),
})

export default projectsSlice.reducer
