import React from 'react'
import MessagePanel from '../components/MessagePanel/MessagePanel'
import MessageContent from '../components/MessageContent/MessageContent'

const Messages = () => {
  return (
    <div className="messages">
      <MessagePanel />
      <MessageContent />
    </div>
  )
}

export default Messages
