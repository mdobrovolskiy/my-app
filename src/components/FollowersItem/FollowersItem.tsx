import React from 'react'
import styles from './FollowersItem.module.sass'
import { handleFollow } from '../../redux/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import userSlice from '../../redux/userSlice'

interface IPropsObjectSub {
  sub: string
}
const FollowersItem: React.FC<IPropsObjectSub> = (props) => {
  const dispatch = useDispatch()
  const userAvatar = useSelector((state: any) =>
    state.userSlice.users.find((item: any) => item.name === props.sub)
  )
  const subscribedTo = useSelector(
    (state: any) => state.userSlice.users[0].subscribedTo
  )
  const thisName = useSelector((state: any) => state.userSlice.users).find(
    (user: any) => user.name === props.sub
  )
  const isFollowed = subscribedTo.includes(thisName.name)
  console.log(isFollowed)
  let notMutataleFollowers = [...subscribedTo]
  const follow = () => {
    if (!subscribedTo.includes(thisName.name)) {
      dispatch(handleFollow([thisName.name, ...notMutataleFollowers]))
    } else {
      dispatch(
        handleFollow(
          notMutataleFollowers.filter((user) => user !== thisName.name)
        )
      )
    }
  }
  const accountOwner = useSelector(
    (state: any) => state.userSlice.users[0].name
  )
  const isAccountOwner = accountOwner === props.sub
  console.log(isAccountOwner)
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <img src={userAvatar.avatar} alt="" />
      </div>
      <div className={styles.name}>{props.sub}</div>
      <div className={styles.btn}>
        {!isAccountOwner && (
          <button
            onClick={() => follow()}
            className={`${isFollowed ? '' : styles.follow}`}
          >
            {isFollowed ? 'Unfollow' : 'Follow'}
          </button>
        )}
      </div>
    </div>
  )
}

export default FollowersItem
