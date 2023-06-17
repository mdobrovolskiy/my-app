import React from 'react'
import styles from './ProfileName.module.sass'
import { useNavigate } from 'react-router-dom'
interface IProfName {
  name: string
}
const ProfileName: React.FC<IProfName> = (name) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/${name.name}`)} className={styles.main}>
      {name.name}
      <img
        src="https://i1.sndcdn.com/avatars-eEAovekpMkaiRv36-GrjLxA-t500x500.jpg"
        alt=""
      />
    </div>
  )
}

export default ProfileName
