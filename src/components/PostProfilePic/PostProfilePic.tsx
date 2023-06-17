import React from 'react'
import styles from './PostProfilePic.module.sass'
import { useNavigate } from 'react-router-dom'
interface IPostAvatar {
  avatar: string
  name: string
}
const PostProfilePic: React.FC<IPostAvatar> = (props) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/${props.name}`)} className={styles.main}>
      <img src={props.avatar} alt="" />
    </div>
  )
}

export default PostProfilePic
