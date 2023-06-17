import React from 'react'
import styles from './FollowedTo.module.sass'
import { useRef } from 'react'
import FollowersItem from '../FollowersItem/FollowersItem'
import { IPropsObject } from '../../types'
import { handleFollowedTo } from '../../redux/navBarSlice'
import { useDispatch } from 'react-redux'

import { useEffect } from 'react'
const FollowedTo: React.FC<IPropsObject> = (props) => {
  const dispatch = useDispatch()

  const mainRef: any = useRef()
  useEffect(() => {
    function handler(e: any) {
      if (!mainRef.current.contains(e.target)) dispatch(handleFollowedTo(false))
    }
    document.addEventListener('mouseup', handler)
    return () => document.removeEventListener('mouseup', handler)
  }, [])
  return (
    <div className={styles.wrapper}>
      <div ref={mainRef} className={styles.main}>
        <div className={styles.topText}>Followed on</div>
        <div className={styles.itemWrapper}>
          {props.user.subscribedTo.map((sub: string) => (
            <FollowersItem sub={sub} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FollowedTo
