import React from 'react'
import styles from './Followers.module.sass'
import FollowersItem from '../FollowersItem/FollowersItem'
import { useRef, useEffect } from 'react'
import { IPropsObject } from '../../types'
import { handleFollowers } from '../../redux/navBarSlice'
import { useDispatch } from 'react-redux'

const Followers: React.FC<IPropsObject> = (props) => {
  const dispatch = useDispatch()
  const mainRef: any = useRef()
  useEffect(() => {
    function handler(e: any) {
      if (!mainRef.current.contains(e.target)) dispatch(handleFollowers(false))
    }
    document.addEventListener('mouseup', handler)
    return () => document.removeEventListener('mouseup', handler)
  }, [])
  return (
    <div className={styles.wrapper}>
      <div ref={mainRef} className={styles.main}>
        <div className={styles.topText}>Followers</div>
        <div className={styles.itemWrapper}>
          {props.user.subscribers.map((sub: string) => (
            <FollowersItem sub={sub} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Followers
