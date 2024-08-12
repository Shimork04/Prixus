import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
// import { Route } from 'lucide-react'
import Auth from './pages/auth'
import Chat from './pages/chat'
import Profile from './pages/profile'

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/chat-page' element={<Chat />} />
        <Route path='/profile-page' element={<Profile />} />
        <Route path='*' element={<Navigate to='/auth' />} />
        {/* <Route path='/notifications' element={authUser ? <NotificationPage /> : <Navigate to='/login' />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App