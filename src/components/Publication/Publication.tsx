import React from 'react'
import styles from './Publication.module.sass'
interface IPublication {
  image: string
}
const Publication: React.FC<IPublication> = (props) => {
  console.log(props)
  return (
    <div className={styles.main}>
      <img src={props.image} alt="" />
    </div>
  )
}

export default Publication
