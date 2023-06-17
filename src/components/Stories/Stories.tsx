import React from 'react'
import styles from './Stories.module.sass'
import { useEffect, useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import MainStory from '../MainStory/MainStory'
const stories = [
  'https://media.cnn.com/api/v1/images/stellar/prod/220525103414-kim-kardashian-beyond-meat.jpg?c=9x16',
  'https://media.cnn.com/api/v1/images/stellar/prod/220525103414-kim-kardashian-beyond-meat.jpg?c=9x16',
  'https://media.cnn.com/api/v1/images/stellar/prod/220525103414-kim-kardashian-beyond-meat.jpg?c=9x16',
  'https://media.cnn.com/api/v1/images/stellar/prod/220525103414-kim-kardashian-beyond-meat.jpg?c=9x16',
  'https://media.cnn.com/api/v1/images/stellar/prod/220525103414-kim-kardashian-beyond-meat.jpg?c=9x16',
]
const Stories = () => {
  const navigate = useNavigate()
  const [currentStory, setCurrentStory] = React.useState(0)

  const lineRef: any = useRef()
  useEffect(() => {
    let check = setInterval(() => {
      if (
        stories[currentStory + 1] &&
        lineRef.current.clientWidth &&
        lineRef.current.clientWidth === 490
      ) {
        setCurrentStory(+currentStory + 1)
      } else if (
        !stories[currentStory + 1] &&
        lineRef.current.clientWidth === 490
      ) {
        navigate('/home')
      }
    }, 90)
    return () => clearInterval(check)
  }, [currentStory])
  const [isAnimationPaused, setIsAnimationPaused] = useState(false)

  const handlePauseUp = () => {
    setIsAnimationPaused(false)
  }
  const handlePauseDown = () => {
    setIsAnimationPaused(true)
  }
  console.log(lineRef.current?.clientWidth)
  const handleStoryRight = () => {
    if (stories[currentStory + 1]) {
      setIsAnimationPaused(false)
      setCurrentStory(+currentStory + 1)
    }
  }
  const handleStoryLeft = () => {
    setIsAnimationPaused(false)
    if (currentStory > 0) setCurrentStory(currentStory - 1)
  }

  const modalRef: any = useRef()
  useEffect(() => {
    console.log()
    lineRef.current.classList.add(`${styles.reset}`)
    setTimeout(() => {
      lineRef.current.classList.remove(`${styles.reset}`)
    }, 1)
    function handler(e: any) {
      if (!modalRef.current.contains(e.target)) {
        navigate('/home')
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [currentStory])

  return (
    <div className={styles.wrapper}>
      <div ref={modalRef} className={styles.main}>
        <img
          onClick={() => navigate('/home')}
          className={styles.close}
          src="https://cdn-icons-png.flaticon.com/128/169/169242.png"
          alt=""
        />
        <div className={styles.side}>
          {stories[currentStory - 2] && (
            <div className={styles.sideItem}>
              <img src={stories[currentStory - 2]} alt="" />
            </div>
          )}
          {stories[currentStory - 1] && (
            <div className={styles.sideItem}>
              <img src={stories[currentStory - 1]} alt="" />
            </div>
          )}
        </div>
        {stories[currentStory] && (
          <div className={styles.center}>
            <div
              ref={lineRef}
              className={styles.fillLine}
              style={{
                animationPlayState: isAnimationPaused ? 'paused' : 'running',
              }}
            ></div>
            <div className={styles.fillLineBg}></div>
            <img
              onClick={() => handleStoryLeft()}
              className={styles.navLeft}
              src="https://cdn-icons-png.flaticon.com/128/143/143285.png"
              alt=""
            />
            <MainStory
              stories={stories}
              currentStory={currentStory}
              handlePauseUp={handlePauseUp}
              handlePauseDown={handlePauseDown}
            />

            <img
              onClick={() => handleStoryRight()}
              className={styles.navRight}
              src="https://cdn-icons-png.flaticon.com/128/143/143286.png"
              alt=""
            />
          </div>
        )}
        <div className={styles.side}>
          {stories[currentStory + 1] && (
            <div className={styles.sideItem}>
              <img src={stories[currentStory + 1]} alt="" />
            </div>
          )}
          {stories[currentStory + 2] && (
            <div className={styles.sideItem}>
              <img src={stories[currentStory + 2]} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Stories
