
import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './Components/Welcome'
import Sigin from './Components/Sigin'
import CreatePage from './Components/CreatePage'
import Account from './Components/Account'

function App() {


  return (

    <BrowserRouter>
      <>

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/createPage" element={<CreatePage />} />
          <Route path="/signin" element={<Sigin />} />
          <Route path="/account" element={<Account />} />

        </Routes>


      </>
    </BrowserRouter>
  )
}

export default App

