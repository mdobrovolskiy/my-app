import { useState } from 'react'
import styles from './Search.module.sass'
import SearchItem from '../SearchItem/SearchItem'
import { useRef } from 'react'

import { useSelector } from 'react-redux'

const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const handleInputValue = (e: any) => {
    setInputValue(e.target.value)
  }
  const modalRef: any = useRef()
  const userPosts = useSelector((state: any) => state.userSlice.users)
  const filteredUsers = userPosts.filter((user: any) =>
    user.name.toLowerCase().includes(inputValue.toLowerCase())
  )

  return (
    <div ref={modalRef} className={styles.main}>
      <div className={styles.searchHeader}>
        <div className={styles.text}>Search</div>
        <div className={styles.inputs}>
          <input
            value={inputValue}
            onChange={(e) => handleInputValue(e)}
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className={styles.wrapper}>
        {inputValue &&
          filteredUsers.map((user: any, i: any) => (
            <SearchItem user={user} key={i} />
          ))}
      </div>
    </div>
  )
}

export default Search
