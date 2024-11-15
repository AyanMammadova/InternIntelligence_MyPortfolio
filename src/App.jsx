import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Main from './components/main/Main'
import About from './components/main/About'
import Works from './components/main/Works'
import Contact from './components/main/Contact'

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/works' element={<Works/>}/>
        <Route path='/contact' element={<Contact/>}/>

        </Route>
      </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
