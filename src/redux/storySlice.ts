import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  showStory: false,
}

export const storySlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    handleStory(state, action) {
      state.showStory = action.payload
    },
  },
})

export const { handleStory } = storySlice.actions

export default storySlice.reducer
