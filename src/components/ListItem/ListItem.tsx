import React from 'react'
import styles from './ListItem.module.sass'
import { useSelector, useDispatch } from 'react-redux'
import { changeNavBarSize } from '../../redux/navBarSlice'
import { useNavigate } from 'react-router-dom'
interface IName {
  name: string
  img: string
}
interface Iitem {
  item: IName
}
const ListItem: React.FC<Iitem> = (props) => {
  const user = useSelector((state: any) => state.userSlice.users[0].name)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const smallNavBar = useSelector((state: any) => state.navBarSlice.smallNavBar)
  const handleSizeChange = (props: any) => {
    switch (props.item.name) {
      case 'Search':
      case 'Notifications': {
        dispatch(changeNavBarSize(!smallNavBar))
        break
      }
      case 'Home':
        navigate('/home')
        break
      case 'Profile':
        navigate(`/${user}`)
        break
      case 'Messages':
        navigate('/messages')
        break
      default:
        break
    }
  }
  return (
    <div onClick={() => handleSizeChange(props)} className={styles.main}>
      <div className={`${styles.image} ${smallNavBar ? styles.small : ''}`}>
        <img src={props.item.img} alt="logo" />
      </div>
      {!smallNavBar && <div className={styles.text}>{props.item.name}</div>}
    </div>
  )
}

export default ListItem
