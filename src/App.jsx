import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout/Layout'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Article from './pages/Article/Article'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/article' element={<Article />}/>
    </Route>

    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App