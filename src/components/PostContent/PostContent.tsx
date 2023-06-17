import React from 'react'
import styles from './PostContent.module.sass'
interface IPostImage {
  image: string
}
const PostContent: React.FC<IPostImage> = (props) => {
  return (
    <div className={styles.main}>
      <img src={props.image} alt="" />
    </div>
  )
}

export default PostContent
