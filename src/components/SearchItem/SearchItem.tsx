import React from 'react'
import styles from './SearchItem.module.sass'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeNavBarSize } from '../../redux/navBarSlice'
interface ISearchUserProps {
  name: string
  avatar: string
}
interface ISearchUser {
  user: ISearchUserProps
}
const SearchItem: React.FC<ISearchUser> = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleItemClick = () => {
    dispatch(changeNavBarSize(false))
    navigate(`/${props.user.name}`)
  }
  return (
    <div onClick={() => handleItemClick()} className={styles.main}>
      <div className={styles.image}>
        <img src={props.user.avatar} alt="" />
      </div>
      <div className={styles.text}>
        <span>{props.user.name}</span>
        <span className={styles.subtext}>subtext</span>
      </div>
    </div>
  )
}

export default SearchItem
