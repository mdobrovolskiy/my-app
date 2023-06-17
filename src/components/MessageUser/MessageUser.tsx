import React from 'react'
import styles from './MessageUser.module.sass'
import { IUserDataObject } from '../../types'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

interface IUserProps {
  user: IUserDataObject
}
const MessageUser: React.FC<IUserProps> = (props) => {
  const params = useParams()
  const lastMessage = useSelector((state: any) => state.lastMessage.lastMessage)

  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/messages/${props.user.name}`)}
      className={`${styles.main} ${
        params.name === props.user.name ? styles.active : ''
      }`}
    >
      <div className={styles.image}>
        <img src={props.user.avatar} alt="" />
      </div>
      <div className={styles.text}>
        <div className={styles.name}>
          <span>{props.user.name}</span>
        </div>
        <div className={styles.lastMessage}>{lastMessage.john}</div>
      </div>
      <div className={styles.time}>11:08</div>
    </div>
  )
}

export default MessageUser
