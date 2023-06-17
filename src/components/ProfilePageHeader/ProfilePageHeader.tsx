import React from 'react'
import styles from './ProfilePageHeader.module.sass'
import { useSelector, useDispatch } from 'react-redux'
import { handleFollowers } from '../../redux/navBarSlice'
import { IPropsObject } from '../../types'
import { handleFollow } from '../../redux/userSlice'
import { handleFollowedTo } from '../../redux/navBarSlice'
import { followUser } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const ProfilePageHeader: React.FC<IPropsObject> = (props) => {
  const params = useParams()
  const navigate = useNavigate()
  const usersData = useSelector((state: any) => state.userSlice.users)
  const thisName = useSelector((state: any) => state.userSlice.users).find(
    (user: any) => user.name === props.user.name
  )
  const subscribedTo = useSelector(
    (state: any) => state.userSlice.users[0].subscribedTo
  )
  const i = usersData.findIndex((item: any) => item.name === props.user.name)
  const subs = useSelector((state: any) => state.userSlice.users[i].subscribers)
  const fakeSubs = [...subs]

  const dispatch = useDispatch()
  const openFollowers = () => {
    dispatch(handleFollowers(true))
  }
  const openFollowedTop = () => {
    dispatch(handleFollowedTo(true))
  }
  let notMutataleFollowers = [...subscribedTo]
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
  const isFollowed = subscribedTo.includes(thisName.name)

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.profileImage}>
          <img src={props.user.avatar} alt="" />
        </div>
        <div className={styles.profileStats}>
          <div className={styles.topStat}>
            <span>{props.user.name}</span>
            {usersData[0].name === props.user.name && (
              <button>Edit profile</button>
            )}
            {usersData[0].name !== props.user.name && (
              <>
                <button
                  className={`${isFollowed ? '' : styles.follow}`}
                  onClick={() => follow()}
                >
                  {isFollowed ? 'Unfollow' : 'Follow'}
                </button>
                <button onClick={() => navigate(`/messages/${params.name}`)}>
                  Message
                </button>
              </>
            )}
            {usersData[0].name === props.user.name && (
              <img
                src="https://cdn-icons-png.flaticon.com/128/747/747914.png"
                alt=""
              />
            )}
          </div>
          <div className={styles.bottomStat}>
            <div className={styles.wrapperCounts}>
              <span>0 publications</span>
              <span onClick={() => openFollowers()}>
                {props.user.subscribers.length} Followers
              </span>
              <span onClick={() => openFollowedTop()}>
                {props.user.subscribedTo.length} Following
              </span>
            </div>
            <div className={styles.userStatWrapper}>
              <div className={styles.userStats}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePageHeader
