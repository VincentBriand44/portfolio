import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Languages from './pages/Languages'
import Presentation from './pages/Presentation'
import Projects from './pages/Projects'

const App = () => (
  <div className='text-gray-100 bg-gray-700'>
    <main className='h-screen overflow-y-scroll pages scroll-smooth snap-y snap-mandatory'>
      <Presentation />
      <Languages />
      <Projects />
      <Contact />
    </main>
    <Navbar />
  </div>
)

export default App
