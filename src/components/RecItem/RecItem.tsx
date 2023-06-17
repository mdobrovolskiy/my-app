import React from 'react'
import styles from './RecItem.module.sass'
import { followUser } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { handleFollow } from '../../redux/userSlice'
interface ISuggestUserProps {
  name: string
  avatar: string
}
interface ISuggestUser {
  user: ISuggestUserProps
}

const RecItem: React.FC<ISuggestUser> = (props) => {
  const usersData = useSelector((state: any) => state.userSlice.users)

  const thisName = useSelector((state: any) => state.userSlice.users).find(
    (user: any) => user.name === props.user.name
  )
  const subscribedTo = useSelector(
    (state: any) => state.userSlice.users[0].subscribedTo
  )
  const isFollowed = subscribedTo.includes(thisName.name)
  const dispatch = useDispatch()

  let notMutataleFollowers = [...subscribedTo]
  const i = usersData.findIndex((item: any) => item.name === props.user.name)
  const subs = useSelector((state: any) => state.userSlice.users[i].subscribers)
  const fakeSubs = [...subs]
  const follow = () => {
    if (!subscribedTo.includes(thisName.name)) {
      fakeSubs.push(usersData[0].name)
      dispatch(handleFollow([thisName.name, ...notMutataleFollowers]))
      dispatch(followUser([i, fakeSubs]))
    } else {
      const filtered = fakeSubs.filter((obj: any) => obj !== usersData[0].name)
      console.log(filtered)
      dispatch(followUser([i, filtered]))
      dispatch(
        handleFollow(
          notMutataleFollowers.filter((user) => user !== thisName.name)
        )
      )
    }
  }

  const navigate = useNavigate()
  return (
    <div className={styles.main}>
      <div
        onClick={() => navigate(`/${props.user.name}`)}
        className={styles.image}
      >
        <img src={props.user.avatar} alt="" />
      </div>
      <div
        onClick={() => navigate(`/${props.user.name}`)}
        className={styles.name}
      >
        <span>{props.user.name}</span>
        <span className={styles.subtext}>recommended for you</span>
      </div>
      <div className={styles.action}>
        <button
          onClick={() => follow()}
          className={`${isFollowed ? styles.follow : ''}`}
        >
          {isFollowed ? 'Unfollow' : 'Follow'}
        </button>
      </div>
    </div>
  )
}

export default RecItem
