import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Languages from './pages/Languages'
import Presentation from './pages/Presentation'
import Projects from './pages/Projects'

const App = () => {
  useEffect(() => {
    window.location.hash !== '' && (window.location.href = window.location.hash)
  }, [])

  return (
    <>
      <main className='h-screen overflow-y-scroll text-gray-100 bg-gray-700 pages scroll-smooth snap-y snap-mandatory'>
        <Presentation />
        <Languages />
        <Projects />
        <Contact />
      </main>
      <Navbar />
    </>
  )
}

export default App
