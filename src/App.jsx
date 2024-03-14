import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Home from './Components/Home'
import Main from './Components/Main'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Main />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
