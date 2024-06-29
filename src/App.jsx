import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import { AboutPage, BoardPage, ErrorPage404, LandingPage } from './pages'

function App () {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/board' element={<BoardPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<ErrorPage404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
