import React from 'react'
import styles from './MessageContent.module.sass'
import MessageItem from '../MessageItem/MessageItem'
import BottomInterface from '../BottomInterface/BottomInterface'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from 'firebase/firestore'
import { db } from '../../firebase'
const MessageContent = React.memo(() => {
  const params = useParams()
  const users = useSelector((state: any) => state.userSlice.users)
  const currUser = users.filter((user: any) => user.name === params.name)
  console.log(currUser)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const q = query(
      collection(db, `${params.name}`),
      orderBy('createdAt'),
      limit(50)
    )
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages: any = []
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id })
      })
      setMessages(messages)
    })

    return () => {
      unsubscribe()
    }
  }, [params.name])

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.user}>
          <div className={styles.userWrapper}>
            {currUser[0] && (
              <>
                <div className={styles.image}>
                  <img src={currUser[0]?.avatar} alt="" />
                </div>
                <div className={styles.text}>
                  <span className={styles.name}>{currUser[0]?.name}</span>
                  <span>last seen today</span>
                </div>
              </>
            )}
          </div>
        </div>
        <div className={styles.actions}>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/10337/10337422.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/10348/10348576.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5718/5718127.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.messageWrapper}>
            {messages?.map((message: any) => (
              <MessageItem message={message} />
            ))}
          </div>
          <BottomInterface />
        </div>
      </div>
    </div>
  )
})

export default MessageContent
