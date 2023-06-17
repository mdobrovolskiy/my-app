import { createSlice } from '@reduxjs/toolkit'
import { IUsersData } from '../types'

const initialState: IUsersData = {
  users: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    handleSignUp(state, action) {
      state.users = [action.payload, ...state.users]
    },
    handleUserPosts(state, action) {
      state.users = action.payload
    },
    addComment(state, action) {
      const notMutuate = state.users
      notMutuate[action.payload[0]].userPost[0].comments.push(action.payload[1])
      state.users[action.payload[0]].userPost[0].comments =
        notMutuate[action.payload[0]].userPost[0].comments
    },
    handleFollow(state, action) {
      state.users[0].subscribedTo = action.payload
    },
    editComments(state, action) {
      state.users[action.payload[0]].userPost[0].comments[
        action.payload[1]
      ].comment = action.payload[2]
    },
    deleteComment(state, action) {
      state.users[action.payload[0]].userPost[0].comments = action.payload[1]
    },
    followUser(state, action) {
      state.users[action.payload[0]].subscribers = action.payload[1]
    },
  },
})

export const {
  handleSignUp,
  handleUserPosts,
  addComment,
  handleFollow,
  editComments,
  deleteComment,
  followUser,
} = userSlice.actions

export default userSlice.reducer
