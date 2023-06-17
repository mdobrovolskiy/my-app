import { useState } from 'react'
import styles from './Register.module.sass'
import { useDispatch } from 'react-redux'
import { handleSignUp } from '../../redux/userSlice'

import { useNavigate } from 'react-router-dom'
const randomImages = [
  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
  'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg',
  'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
  'https://st2.depositphotos.com/1000580/7179/i/600/depositphotos_71797723-stock-photo-meadow-in-mountain.jpg',
]
const SignUp = 'Sign Up'
const Register = () => {
  const [imageInputValue, setImageInputValue] = useState('')
  const [nameInputValue, setNameInputValue] = useState('')
  const [profileInputValue, setProfileInputValue] = useState('')
  const [randomImageIndex, setRandomImageIndex] = useState(2)
  const [inputError, setInputError] = useState(false)
  const handleImageInput = (e: any) => {
    setImageInputValue(e.target.value)
  }
  const handleNameValue = (e: any) => {
    setNameInputValue(e.target.value)
  }
  const handleProfileValue = (e: any) => {
    setProfileInputValue(e.target.value)
  }
  const generateImage = () => {
    setRandomImageIndex(Math.floor(Math.random() * randomImages.length))
    setImageInputValue(randomImages[randomImageIndex])
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const signUpSubmit = () => {
    if (nameInputValue.length > 5 && profileInputValue.length > 5) {
      dispatch(
        handleSignUp({
          name: profileInputValue,
          avatar: imageInputValue,
          userPost: [{ postContent: '', postSubText: '', comments: [] }],
          subscribers: [
            'bart',
            'anyroast',
            'kroos',
            'jessica',
            'vanya2131',
            'goat',
            'fedir',
            'vasya',
            'misha',
            'anymelon',
            'anyroast',
          ],
          subscribedTo: [],
        })
      )

      navigate('/home')
    } else {
      setInputError(true)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img
              src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-White-Dark-Background-Logo.wine.svg"
              alt=""
            />
          </div>
          <h2>{SignUp}</h2>
          <div className={styles.pass}>
            <input
              type="text"
              value={nameInputValue}
              onChange={(e) => handleNameValue(e)}
              placeholder="Whats your name?"
            />
          </div>
          <div className={styles.login}>
            <input
              value={profileInputValue}
              onChange={(e) => handleProfileValue(e)}
              type="text"
              placeholder="Enter profile name"
            />
          </div>
          <div className={styles.pass}>
            <input
              onChange={(e) => handleImageInput(e)}
              type="text"
              value={imageInputValue}
              placeholder="Enter image url"
            />
            <button onClick={() => generateImage()} className={styles.generate}>
              Generate image
            </button>
          </div>

          {imageInputValue && (
            <img
              className={styles.generatedImage}
              src={imageInputValue}
              alt=""
            />
          )}

          <div className={styles.submit}>
            <button onClick={() => signUpSubmit()}>Sign up</button>
            {inputError && (
              <div className={styles.error}>
                <span>
                  Error, your nickname should be longer than 5 symbols
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
