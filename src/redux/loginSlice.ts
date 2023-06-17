import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  showLogin: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    handleLogin(state, action) {
      state.showLogin = action.payload
    },
  },
})

export const { handleLogin } = loginSlice.actions

export default loginSlice.reducer
