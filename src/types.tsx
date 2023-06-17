export interface IUsersData {
  users: IUserDataObject[]
}

export interface IUserDataObject {
  name: string
  avatar: string
  userPost: IUserPost[]
  subscribers: []
  subscribedTo: []
}

export interface IUserPost {
  postContent: string
  postSubText: string
  comments: IComment[]
}

export interface IComment {
  comment: string
  commentator: string
}
export interface IPropsObject {
  user: IUserDataObject
  i: number
}
