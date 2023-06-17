import React, { useEffect } from 'react'
import styles from './CommentItem.module.sass'
import { useState, useRef } from 'react'
import { editComments, deleteComment } from '../../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'

interface ICommentObj {
  obj: IComments
  i: number
  inputValue: string
}
interface IComments {
  comment: string
  commentator: string
}

const CommentItem: React.FC<ICommentObj> = (props) => {
  const InputRef: any = useRef()
  const comments = useSelector(
    (state: any) => state.userSlice.users[props.i + 1].userPost[0].comments
  )

  const currCommentIndex = comments.findIndex(
    (obj: any) => obj.comment === props.obj.comment
  )

  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const [isEditOpen, setIsEditOpen] = useState(false)
  useEffect(() => {
    if (isEditOpen) {
      InputRef.current.focus()
    }
  }, [isEditOpen])
  const onChangeValue = (e: any) => {
    setInputValue(e.target.value)
  }
  const openEdit = () => {
    setIsEditOpen(true)
  }

  const handleCommentChange = () => {
    setIsEditOpen(false)
    setInputValue(InputRef.current.value)
    dispatch(
      editComments([props.i + 1, currCommentIndex, InputRef.current.value])
    )
  }
  const handleKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      handleCommentChange()
    } else if (e.code === 'Escape') {
      onReturnEdit()
    }
  }

  const updatedComments = comments.slice()
  updatedComments.splice(currCommentIndex, 1)
  console.log(updatedComments)

  const handleDeleteComment = () => {
    dispatch(deleteComment([props.i + 1, updatedComments]))
  }
  const onReturnEdit = () => {
    setInputValue(props.inputValue)
  }

  return (
    <div className={styles.main}>
      <div className={styles.name}>{props.obj.commentator}</div>
      {!isEditOpen && <div className={styles.content}>{props.obj.comment}</div>}

      {isEditOpen && (
        <>
          <input
            onKeyDown={(e) => handleKeyPress(e)}
            ref={InputRef}
            onChange={(e) => onChangeValue(e)}
            value={inputValue ? inputValue : props.obj.comment}
            type="text"
          />
        </>
      )}
      {!isEditOpen && (
        <img
          src="https://cdn-icons-png.flaticon.com/128/10542/10542531.png"
          onClick={() => openEdit()}
          alt=""
        />
      )}
      {isEditOpen && (
        <img
          onClick={() => onReturnEdit()}
          className={styles.cancel}
          src="https://cdn-icons-png.flaticon.com/128/3031/3031827.png"
          alt=""
        />
      )}
      {!isEditOpen && (
        <img
          onClick={() => handleDeleteComment()}
          className={styles.delete}
          src="https://cdn-icons-png.flaticon.com/128/10337/10337552.png"
          alt=""
        />
      )}
      {isEditOpen && (
        <img
          onClick={() => handleCommentChange()}
          className={styles.confirm}
          src="https://cdn-icons-png.flaticon.com/128/2251/2251677.png"
          alt=""
        />
      )}
    </div>
  )
}

export default CommentItem
