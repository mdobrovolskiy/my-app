import styles from './StoriesItem.module.sass'
import { useNavigate } from 'react-router-dom'

const StoriesItem = () => {
  const navigate = useNavigate()

  return (
    <div
      onDrag={() => console.log('drug')}
      onClick={() => navigate('/stories')}
      className={styles.main}
    >
      <div className={styles.story}>
        <div className={styles.storyBorder}>
          <div className={styles.image}>
            <div className={styles.back}></div>
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/220525103414-kim-kardashian-beyond-meat.jpg?c=9x16"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={styles.text}>kimkardashian</div>
    </div>
  )
}

export default StoriesItem
