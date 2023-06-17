import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import StoriesList from '../components/StoriesList/StoriesList'
import Suggested from '../components/Suggested/Suggested'
import Post from '../components/Post/Post'
import Search from '../components/Search/Search'
import Login from '../components/Login/Login'
import Stories from '../components/Stories/Stories'
import NavBlock from '../components/NavBlock/NavBlock'
import { IUserDataObject } from '../types'

const Home = React.memo(() => {
  const [sliceEnd, setSliceEnd] = useState<number>(3)

  const showLogin = useSelector((state: any) => state.loginSlice.showLogin)
  const smallNavBar = useSelector((state: any) => state.navBarSlice.smallNavBar)
  const showStory = useSelector((state: any) => state.storySlice.showStory)

  const usersData = useSelector((state: any) => state.userSlice.users)
  const userPosts = usersData.filter(
    (user: IUserDataObject) => user.userPost[0].postContent.length > 1
  )
  let slicedPosts = userPosts.slice(0, sliceEnd)
  console.log('render')
  return (
    <>
      <NavBlock />
      {smallNavBar && <Search />}
      <div className="center-content">
        <StoriesList />
        {slicedPosts.map((post: IUserDataObject, i: number) => (
          <Post
            key={post.name}
            user={post}
            i={i}
            lastIndex={slicedPosts.length - 1}
            setSliceEnd={setSliceEnd}
          />
        ))}
      </div>
      <Suggested />
      {showLogin && <Login />}
      {showStory && <Stories />}
    </>
  )
})

export default Home
