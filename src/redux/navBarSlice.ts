import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  smallNavBar: false,
  navRef: null,
  followersOpen: false,
  followedToOpen: false,
}

export const counterSlice = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    changeNavBarSize(state, action) {
      state.smallNavBar = action.payload
    },
    handleFollowers(state, action) {
      state.followersOpen = action.payload
    },
    handleFollowedTo(state, action) {
      state.followedToOpen = action.payload
    },
  },
})

export const { changeNavBarSize, handleFollowers, handleFollowedTo } =
  counterSlice.actions

export default counterSlice.reducer
