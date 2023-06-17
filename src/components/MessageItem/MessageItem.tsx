import React from 'react'
import styles from './MessageItem.module.sass'
interface IMessageProps {
  avatar: string
  text: string
  createdAt: any
  id: number
  name: string
}
interface IMessage {
  message: IMessageProps
}
const MessageItem: React.FC<IMessage> = (props) => {
  function getTimeFromSeconds(seconds: any) {
    var currentDate = new Date(seconds * 1000)
    var hours = currentDate.getHours()
    var minutes = currentDate.getMinutes()

    return hours + ':' + minutes
  }

  var seconds =
    props.message && props.message.createdAt
      ? props.message.createdAt.seconds
      : 0

  var result = getTimeFromSeconds(seconds)

  return (
    <div className={styles.main}>
      <div className={styles.message}>
        <span>{props.message.text}</span>
      </div>
      <div className={styles.time}>{result}</div>
    </div>
  )
}

export default MessageItem
