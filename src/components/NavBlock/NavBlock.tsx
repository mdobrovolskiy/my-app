import React from 'react'
import styles from './NavBlock.module.sass'
import ListItem from '../ListItem/ListItem'
import { data } from '../../data'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const NavBlock = React.memo(() => {
  const navigate = useNavigate()
  const smallNavBar = useSelector((state: any) => state.navBarSlice.smallNavBar)

  const navRef: any = useRef()

  return (
    <div className={styles.father}>
      <div
        ref={navRef}
        className={`${styles.main} ${smallNavBar ? styles.small : ''}`}
      >
        <div
          onClick={() => navigate('/home')}
          className={`${styles.logo} ${smallNavBar ? styles.smalllogo : ''}`}
        >
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png"
            alt="logo"
          />
        </div>
        <div className={styles.list}>
          {data.map((item) => (
            <ListItem key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
})

export default NavBlock
