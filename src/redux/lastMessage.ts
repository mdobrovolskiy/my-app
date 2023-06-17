import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  lastMessage: {
    john: 'yes',
    bart: 'no',
  },
}

export const lastMessage = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLastMessage(state, action) {
      state.lastMessage = action.payload
    },
  },
})

export const { setLastMessage } = lastMessage.actions

export default lastMessage.reducer
