import { Route, Routes, useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import Model from './pages/Model'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence initial={false} mode='wait'>
      <Routes key={location.pathname} location={location.pathname}>
        <Route path='/' element={<Landing />} />
        <Route path='/model' element={<Model />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
