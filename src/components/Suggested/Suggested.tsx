import React from 'react'
import styles from './Suggested.module.sass'
import ProfileName from '../ProfileName/ProfileName'
import RecItem from '../RecItem/RecItem'
import { useDispatch, useSelector } from 'react-redux'
import { handleLogin } from '../../redux/loginSlice'
import { useNavigate } from 'react-router-dom'

const Suggested = React.memo(() => {
  const navigate = useNavigate()
  const showLogin = useSelector((state: any) => state.loginSlice.showLogin)
  const dispatch = useDispatch()
  const handleLoginChange = (state: boolean) => {
    dispatch(handleLogin(!state))
  }
  const usersData = useSelector((state: any) => state.userSlice.users)
  const slicedPosts = usersData.slice(usersData.length - 5, usersData.length)

  return (
    <div className={styles.main}>
      <div className={styles.thisHeader}>
        <div
          onClick={() => navigate(`/${usersData[0].name}`)}
          className={styles.image}
        >
          <img src={usersData[0].avatar} alt="" />
        </div>
        <div className={styles.name}>
          <span>{usersData[0].name}</span>
          <span className={styles.subtext}>{usersData[0].name}</span>
        </div>
        <div
          onClick={() => handleLoginChange(showLogin)}
          className={styles.action}
        >
          Log out
        </div>
      </div>
      <div className={styles.recommend}>Recommendations for you</div>
      {slicedPosts.map((user: any) => (
        <RecItem key={user.name} user={user} />
      ))}
      <div className={styles.info}>
        <ul>
          <li>Help</li>
          <li>Jobs</li>
          <li>Privacy</li>
          <li>API</li>
          <li>About</li>
          <li>Press</li>
          <li>Language</li>
          <li>Locations</li>
        </ul>
        <div>
          <span>© 2023 INSTAGRAM BY MISHA</span>
        </div>
      </div>
    </div>
  )
})

export default Suggested
