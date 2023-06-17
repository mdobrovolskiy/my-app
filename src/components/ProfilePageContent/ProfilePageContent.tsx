import React from 'react'
import styles from './ProfilePageContent.module.sass'
import Publication from '../Publication/Publication'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProfilePageContent = () => {
  const params = useParams()
  const publications = useSelector((state: any) => state.userSlice.users)
  const currentPublication = publications.filter(
    (user: any) => user.name === params.name
  )
  console.log(currentPublication)
  const [currentComponent, setCurrentComponent] = React.useState('Publications')
  const changeComponent = (str: string) => {
    setCurrentComponent(str)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.sortWrapper}>
          <div
            onClick={() => changeComponent('Publications')}
            className={`${styles.sortItem} ${
              currentComponent === 'Publications' ? styles.active : ''
            }`}
          >
            Publications
          </div>
          <div
            onClick={() => changeComponent('Saved')}
            className={`${styles.sortItem} ${
              currentComponent === 'Saved' ? styles.active : ''
            }`}
          >
            Saved
          </div>
          <div
            onClick={() => changeComponent('Mentioned')}
            className={`${styles.sortItem} ${
              currentComponent === 'Mentioned' ? styles.active : ''
            }`}
          >
            Mentioned
          </div>
        </div>
        <div className={styles.postsWrapper}>
          {' '}
          {currentPublication[0].userPost[0].postContent.length > 1 &&
            currentPublication[0].userPost.map((obj: any) => (
              <Publication image={obj.postContent} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProfilePageContent
