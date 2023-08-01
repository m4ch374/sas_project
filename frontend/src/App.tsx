import { Route, Routes, useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import Model from './pages/Model'
import { AnimatePresence } from 'framer-motion'
import Auth from './pages/Auth'
import NotFound from './pages/Not_Found'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence initial={false} mode='wait'>
      <Routes key={location.pathname} location={location.pathname}>
        <Route path='/' element={<Landing />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/model' element={<Model />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
