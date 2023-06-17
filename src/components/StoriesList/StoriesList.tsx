import React from 'react'
import styles from './StoriesList.module.sass'
import StoriesItem from '../StoriesItem/StoriesItem'
import { useRef, useState } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

const StoriesList = React.memo(() => {
  const containerRef: React.LegacyRef<HTMLDivElement> = useRef(null)

  return (
    <div ref={containerRef} className={styles.main}>
      <div className={styles.leftArrow}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/1634/1634157.png"
          alt=""
        />
      </div>
      <HorizontalScroll>
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
      </HorizontalScroll>

      <div className={styles.rightArrow}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/1634/1634158.png"
          alt=""
        />
      </div>
    </div>
  )
})

export default StoriesList
