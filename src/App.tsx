
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { WhatsAppFloat } from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-gray-950 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Ogbaje Emmanuel Adoyi. All rights reserved.</p>
        </div>
      </footer>
      <WhatsAppFloat />
    </div>
  );
}

export default App;