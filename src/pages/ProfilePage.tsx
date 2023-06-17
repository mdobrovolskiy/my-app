import React from 'react'
import ProfilePageHeader from '../components/ProfilePageHeader/ProfilePageHeader'
import ProfilePageContent from '../components/ProfilePageContent/ProfilePageContent'
import { useSelector } from 'react-redux'
import Search from '../components/Search/Search'
import NavBlock from '../components/NavBlock/NavBlock'
import { useParams } from 'react-router-dom'
import { IUserDataObject } from '../types'
import Followers from '../components/Followers/Followers'
import FollowedTo from '../components/FollowedTo/FollowedTo'

const ProfilePage = () => {
  const smallNavBar = useSelector((state: any) => state.navBarSlice.smallNavBar)
  const userPosts = useSelector((state: any) => state.userSlice.users)
  const followersOpen = useSelector(
    (state: any) => state.navBarSlice.followersOpen
  )
  const followedToOpen = useSelector(
    (state: any) => state.navBarSlice.followedToOpen
  )
  const params = useParams()
  const sortedUser = userPosts.find(
    (obj: IUserDataObject) => obj.name === params.name
  )

  return (
    <>
      <NavBlock />
      {smallNavBar && <Search />}
      <div className="profilePage">
        <ProfilePageHeader user={sortedUser} i={1} />
        <ProfilePageContent />
        {followersOpen && <Followers user={sortedUser} i={1} />}
        {followedToOpen && <FollowedTo user={sortedUser} i={1} />}
      </div>
    </>
  )
}

export default ProfilePage
