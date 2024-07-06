import { HashRouter, Route, Routes } from 'react-router-dom'
import { LandingPage, BoardPage, AboutPage, ErrorPage } from './pages'

function App () {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/board' element={<BoardPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
