import React from 'react'
import styles from '../MessageContent/MessageContent.module.sass'
import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { db } from '../../firebase'
import { useParams } from 'react-router-dom'

const BottomInterface = () => {
  const params = useParams()
  const LoggedUser = useSelector((state: any) => state.userSlice.users[0])
  const [message, setMessage] = useState('')
  const onChangeValue = (e: any) => {
    setMessage(e.target.value)
  }
  const sendMessage = async (event: any) => {
    event.preventDefault()
    if (message.trim() === '') {
      alert('Enter valid message')
      return
    }

    await addDoc(collection(db, `${params.name}`), {
      text: message,
      name: LoggedUser.name,
      avatar: LoggedUser.avatar,
      createdAt: serverTimestamp(),
    })
    setMessage('')
  }
  const handleKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      sendMessage(e)
    }
  }
  return (
    <>
      <div className={styles.bottomInterface}>
        <div className={styles.left}>
          <div className={styles.smiles}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3129/3129282.png"
              alt=""
            />
          </div>
          <div className={styles.value}>
            <input
              onKeyDown={(e) => handleKeyPress(e)}
              value={message}
              onChange={(e) => onChangeValue(e)}
              type="text"
              placeholder="Message"
            />
          </div>
        </div>
        <div onClick={(event) => sendMessage(event)} className={styles.send}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/786/786407.png"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default BottomInterface
