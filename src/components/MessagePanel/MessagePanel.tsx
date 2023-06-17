import React from 'react'
import styles from './MessagePanel.module.sass'
import MessageUser from '../MessageUser/MessageUser'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IUserDataObject } from '../../types'

const MessagePanel = () => {
  const users = useSelector((state: any) => state.userSlice.users)
  const navigate = useNavigate()
  const updatedUsers = users.slice(1)
  return (
    <div className={styles.main}>
      <div className={styles.search}>
        <div className={styles.back}>
          <img
            onClick={() => navigate('/home')}
            src="https://cdn-icons-png.flaticon.com/128/3503/3503911.png"
            alt=""
          />
        </div>
        <div className={styles.searchDiv}>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      {updatedUsers.map((user: IUserDataObject) => (
        <MessageUser user={user} />
      ))}
    </div>
  )
}

export default MessagePanel
