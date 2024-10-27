import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../paginas/Home'
import NewPost from '../paginas/NewPost'

function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/new' element={<NewPost/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter