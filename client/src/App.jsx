import React from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'


const App = (props) => {
  return (
     <div>
       <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage />}/>
       </Routes>
     </div>
  )
}

export default App