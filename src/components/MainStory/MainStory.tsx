import React from 'react'

import styles from '../Stories/Stories.module.sass'
interface IMainStory {
  stories: string[]
  currentStory: number
  handlePauseDown: any
  handlePauseUp: any
}
const MainStory: React.FC<IMainStory> = ({
  stories,
  currentStory,
  handlePauseUp,
  handlePauseDown,
}) => {
  return (
    <>
      <div className={styles.avatarText}>
        <span>kimkardashian</span>
      </div>
      <img
        className={styles.avatar}
        src="https://media.architecturaldigest.com/photos/62102a021de6774a1e27774f/16:9/w_2560%2Cc_limit/1094653148"
        alt=""
      />
      <img
        onMouseDown={() => handlePauseDown()}
        onMouseUp={() => handlePauseUp()}
        src={stories[currentStory]}
        alt=""
      />
    </>
  )
}

export default MainStory
