import React from 'react'
import NavBar from './components/NavBar'
import Movies from './components/Movies'
import WatchList from './components/WatchList'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from './components/Banner'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<> <Banner /> <Movies /></>} />
          <Route path='/watchlist' element={<WatchList />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
