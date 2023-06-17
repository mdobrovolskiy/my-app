import React from 'react'
import styles from './Login.module.sass'
import { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleLogin } from '../../redux/loginSlice'
import { useNavigate, useLocation } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const modalRef: any = useRef()
  const dispatch = useDispatch()
  const showLogin = useSelector((state: any) => state.loginSlice.showLogin)
  useEffect(() => {
    function handler(e: any) {
      if (!modalRef.current.contains(e.target)) {
        dispatch(handleLogin(false))
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [showLogin])

  const location = useLocation()

  const handleLoginButton = () => {
    if (location.pathname === '/home') {
      dispatch(handleLogin(false))
    } else navigate('/home')
  }

  return (
    <div className={styles.wrapper}>
      <div ref={modalRef} className={styles.main}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img
              src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-White-Dark-Background-Logo.wine.svg"
              alt=""
            />
          </div>
          <div className={styles.login}>
            <input type="text" placeholder="Login" />
          </div>
          <div className={styles.pass}>
            <input type="password" placeholder="password" />
          </div>
          <div className={styles.save}>
            <input type="checkbox" />
            <span>save </span>
          </div>
          <div className={styles.submit}>
            <button onClick={() => handleLoginButton()}>Log in</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
