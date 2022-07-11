import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Presentation';
import Languages from './components/Languages';
import Projects from './components/Projects';

function App() {
  return (
    <div className="pages text-gray-100 bg-gray-700">
      <Header />
      <main>
        <Languages />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
