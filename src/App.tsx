import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import ProfilePage from './pages/ProfilePage'

import StoriesPage from './pages/StoriesPage'
import SignUp from './pages/SignUp'
import Messages from './pages/Messages'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <div className="main">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/:name" element={<ProfilePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/messages/:name" element={<Messages />} />
        </Routes>
      </div>
    </>
  )
}

export default App
