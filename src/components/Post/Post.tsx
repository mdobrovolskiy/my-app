import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Post.module.sass'
import PostProfilePic from '../PostProfilePic/PostProfilePic'
import ProfileName from '../ProfileName/ProfileName'
import PostContent from '../PostContent/PostContent'
import Like from '../Like/Like'
import Send from '../Send/Send'
import Comment from '../Comment/Comment'
import SaveIcon from '../SaveIcon/SaveIcon'
import { IUserDataObject } from '../../types'
import { addComment } from '../../redux/userSlice'
import CommentItem from '../CommentItem/CommentItem'

import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
interface PostI {
  user: IUserDataObject
  i: number
  setSliceEnd: any
  lastIndex: number
}

const Post: React.FC<PostI> = React.memo(
  ({ user, i, setSliceEnd, lastIndex }) => {
    const { ref, inView } = useInView({
      threshold: 0.5,
    })
    const refCheck = i === lastIndex ? ref : null
    useEffect(() => {
      if (inView) {
        setSliceEnd((state: number) => state + 3)
      }
    }, [inView])

    const [inputValue, setInputValue] = React.useState('')
    const dispatch = useDispatch()
    const comments = useSelector(
      (state: any) => state.userSlice.users[i + 1].userPost[0].comments
    )
    const commentator = useSelector(
      (state: any) => state.userSlice.users[0].name
    )

    const onAddComment = () => {
      dispatch(
        addComment([i + 1, { commentator: commentator, comment: inputValue }])
      )
      setInputValue('')
    }

    const handleInputChange = (e: any) => {
      setInputValue(e.target.value)
    }
    const handleKeyPress = (e: any) => {
      if (e.keyCode === 13) {
        e.preventDefault()
        onAddComment()
      }
    }

    return (
      <div ref={refCheck} className={styles.main}>
        <div className={styles.postHeader}>
          <PostProfilePic name={user.name} avatar={user.avatar} />
          <ProfileName name={user.name} />
        </div>
        <PostContent image={user.userPost[0].postContent} />
        <div className={styles.icons}>
          <div className={styles.leftIcons}>
            <Like />
            <Comment />
            <Send />
          </div>
          <div>
            <SaveIcon />
          </div>
        </div>
        <div className={styles.likes}>2131231 likes</div>
        <div className={styles.opis}>
          <span>{user.name}</span> {user.userPost[0].postSubText}
        </div>
        {comments.map((comment: any) => (
          <CommentItem i={i} obj={comment} inputValue={inputValue} />
        ))}
        <div className={styles.comment}>
          <div
            className={`${styles.inputDiv} ${inputValue ? styles.active : ''}`}
          >
            <input
              value={inputValue}
              onKeyDown={(e) => handleKeyPress(e)}
              onChange={(e) => handleInputChange(e)}
              type="text"
              placeholder="add comment"
            />
          </div>
          {inputValue && (
            <div className={styles.handle}>
              <button onClick={() => onAddComment()}>Add comment</button>
            </div>
          )}
        </div>
      </div>
    )
  }
)

export default Post
