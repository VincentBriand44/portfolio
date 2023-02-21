import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Languages from './pages/Languages'
import Presentation from './pages/Presentation'
import Projects from './pages/Projects'

const App = () => (
  <>
    <main className='h-screen overflow-y-scroll pages scroll-smooth snap-y snap-mandatory text-gray-100 bg-gray-700'>
      <Presentation />
      <Languages />
      <Projects />
      <Contact />
    </main>
    <Navbar />
  </>
)

export default App
